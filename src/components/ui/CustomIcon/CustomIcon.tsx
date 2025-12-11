import React from 'react';
import type { ImageStyle, StyleProp } from 'react-native';
import { Image } from 'react-native';

import { styles } from './styles';

import { ICONS } from 'src/constants';

interface CustomIconProps {
  name: keyof typeof ICONS;
  extraStyle?: StyleProp<ImageStyle>;
}

const CustomIcon = ({ name, extraStyle }: CustomIconProps) => {
  return (
    <Image
      source={ICONS[name]}
      style={[styles.default, extraStyle]}
      resizeMode="contain"
    />
  );
};

export default CustomIcon;
