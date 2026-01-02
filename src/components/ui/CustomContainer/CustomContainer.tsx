import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  variant?:
    | 'black'
    | 'green'
    | 'correct'
    | 'incorrect'
    | 'yellow'
    | 'alert'
    | 'red'
    | 'blue';
}

const CustomContainer = ({
  children,
  extraStyle,
  variant = 'blue',
}: CustomContainerProps) => {
  return (
    <View style={[styles.default, styles[variant], extraStyle]}>
      {children}
    </View>
  );
};

export default CustomContainer;
