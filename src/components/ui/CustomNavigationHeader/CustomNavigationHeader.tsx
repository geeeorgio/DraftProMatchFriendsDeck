import { useNavigation } from '@react-navigation/native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcon/CustomIcon';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { MainStackNavigationProp } from 'src/types';

interface CustomNavigationHeaderProps {
  props?: NativeStackHeaderProps;
}

const CustomNavigationHeader = ({ props }: CustomNavigationHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const title = props?.options?.title || '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          onPress={() => navigation.goBack()}
          extraStyle={styles.backButton}
        >
          <CustomIcon name="arrow_left" />
        </CustomButton>
        <CustomContainer variant="blue" extraStyle={styles.titleContainer}>
          <CustomText extraStyle={styles.title}>{title}</CustomText>
        </CustomContainer>
      </View>
    </View>
  );
};

export default CustomNavigationHeader;
