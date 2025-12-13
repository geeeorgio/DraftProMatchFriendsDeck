import React from 'react';
import { View } from 'react-native';

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
      <CustomText extraStyle={styles.text}>{message}</CustomText>
    </View>
  );
};

export default KickOffGameAlert;
