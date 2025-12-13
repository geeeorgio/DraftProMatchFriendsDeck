import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { MAX_NUMBER_OF_ROUNDS, MIN_NUMBER_OF_ROUNDS } from 'src/constants';

interface CustomActionButtonsProps {
  handleDecreaseRounds: () => void;
  handleIncreaseRounds: () => void;
  contextNumberOfRounds: number;
}

const CustomActionButtons = ({
  handleDecreaseRounds,
  handleIncreaseRounds,
  contextNumberOfRounds,
}: CustomActionButtonsProps) => {
  return (
    <View style={styles.roundsContainer}>
      <CustomText extraStyle={styles.roundsTitle}>NUMBER OF ROUNDS</CustomText>
      <View style={styles.roundsControls}>
        <CustomButton
          onPress={handleDecreaseRounds}
          extraStyle={styles.roundButton}
          disabled={contextNumberOfRounds <= MIN_NUMBER_OF_ROUNDS}
        >
          <CustomText extraStyle={styles.roundButtonText}>−</CustomText>
        </CustomButton>
        <CustomContainer extraStyle={styles.roundsDisplay}>
          <CustomText extraStyle={styles.roundsNumber}>
            {contextNumberOfRounds}
          </CustomText>
        </CustomContainer>
        <CustomButton
          onPress={handleIncreaseRounds}
          extraStyle={styles.roundButton}
          disabled={contextNumberOfRounds >= MAX_NUMBER_OF_ROUNDS}
        >
          <CustomText extraStyle={styles.roundButtonText}>+</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default CustomActionButtons;
