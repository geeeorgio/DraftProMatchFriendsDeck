import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND, MIN_NUMBER_OF_ROUNDS } from 'src/constants';

type GameContextType = {
  isContextLoading: boolean;
  contextBackground: ImageSourcePropType;
  //
  contextIsOnboardingCompleted: boolean;
  contextSetIsOnboardingCompleted: () => void;
  //
  contextPlayers: string[];
  contextSetPlayers: Dispatch<SetStateAction<string[]>>;
  contextResetPlayers: () => void;
  //
  contextNumberOfRounds: number;
  contextSetNumberOfRounds: (n: number) => void;
};

export const GameContext = createContext<GameContextType>({
  isContextLoading: true,
  contextBackground: MAIN_BACKGROUND,
  contextIsOnboardingCompleted: false,
  contextSetIsOnboardingCompleted: async () => {
    console.warn('Game Context not mounted');
  },
  contextPlayers: ['', ''],
  contextSetPlayers: () => {
    console.warn('Game Context not mounted');
  },
  contextResetPlayers: () => {
    console.warn('Game Context not mounted');
  },
  contextNumberOfRounds: MIN_NUMBER_OF_ROUNDS,
  contextSetNumberOfRounds: () => {
    console.warn('Game Context not mounted');
  },
});

export const useGameContext = () => useContext(GameContext);
