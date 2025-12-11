import type { ReactNode } from 'react';
import React from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  extraStyle?: StyleProp<ViewStyle>;
  variant?: 'green' | 'yellow' | 'red';
  distance?: Insets;
}

const CustomButton = ({
  children,
  onPress,
  disabled = false,
  extraStyle,
  variant = 'yellow',
  distance = { top: 10, left: 10, right: 10, bottom: 10 },
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.default,
        styles[variant],
        extraStyle,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
      hitSlop={distance}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;
