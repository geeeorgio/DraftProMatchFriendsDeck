import { createContext, useContext } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';

type GameContextType = {
  isContextLoading: boolean;
  //
  contextBackground: ImageSourcePropType;
  //
  contextIsOnboardingCompleted: boolean;
  contextSetIsOnboardingCompleted: () => void;
  //
};

export const GameContext = createContext<GameContextType>({
  isContextLoading: true,
  contextBackground: MAIN_BACKGROUND,
  contextIsOnboardingCompleted: false,
  contextSetIsOnboardingCompleted: async () => {
    console.warn('Game Context not mounted');
  },
});

export const useGameContext = () => useContext(GameContext);
