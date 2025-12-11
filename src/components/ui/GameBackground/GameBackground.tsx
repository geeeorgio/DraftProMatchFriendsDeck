import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { useGameContext } from 'src/hooks';

interface GameBackgroundProps {
  children: ReactNode;
}

const GameBackground = ({ children }: GameBackgroundProps) => {
  const { contextBackground } = useGameContext();

  return (
    <ImageBackground
      source={contextBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

export default GameBackground;
