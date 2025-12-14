import React from 'react';
import { View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface KickOffGameAlertProps {
  visible: boolean;
  message: string;
}

const KickOffGameAlert = ({ visible, message }: KickOffGameAlertProps) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <CustomContainer variant="alert" extraStyle={styles.alertContainer}>
        <CustomText extraStyle={styles.text}>{message}</CustomText>
      </CustomContainer>
    </View>
  );
};

export default KickOffGameAlert;
