import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcon/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { ICONS } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

interface CustomGameHeaderProps {
  title: string;
  hideBackButton?: boolean;
  onRightButtonPress?: () => void;
  rightButtonIcon?: keyof typeof ICONS;
  onBackPress?: () => void;
}

const CustomGameHeader = ({
  title,
  hideBackButton = false,
  onRightButtonPress,
  rightButtonIcon,
  onBackPress: customOnBackPress,
}: CustomGameHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const onBackPress = () => {
    if (customOnBackPress) {
      customOnBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {!hideBackButton && (
        <CustomButton onPress={onBackPress} extraStyle={styles.backButton}>
          <CustomIcon name="arrow_left" />
        </CustomButton>
      )}
      <CustomContainer variant="yellow" extraStyle={styles.titleContainer}>
        <CustomText extraStyle={styles.title}>{title}</CustomText>
      </CustomContainer>
      {rightButtonIcon && (
        <CustomButton
          onPress={onRightButtonPress}
          extraStyle={styles.rightButton}
        >
          <CustomIcon name={rightButtonIcon as keyof typeof ICONS} />
        </CustomButton>
      )}
    </View>
  );
};

export default CustomGameHeader;
