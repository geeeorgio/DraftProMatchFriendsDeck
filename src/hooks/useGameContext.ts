import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND, MIN_NUMBER_OF_ROUNDS } from 'src/constants';
import type { PlayerData } from 'src/types';

type GameContextType = {
  isContextLoading: boolean;
  contextBackground: ImageSourcePropType;
  //
  contextIsOnboardingCompleted: boolean;
  contextSetIsOnboardingCompleted: () => void;
  //
  contextPlayers: PlayerData[];
  contextSetPlayers: Dispatch<SetStateAction<PlayerData[]>>;
  contextResetPlayers: () => void;
  //
  contextNumberOfRounds: number;
  contextSetNumberOfRounds: Dispatch<SetStateAction<number>>;
};

export const GameContext = createContext<GameContextType>({
  isContextLoading: true,
  contextBackground: MAIN_BACKGROUND,
  contextIsOnboardingCompleted: false,
  contextSetIsOnboardingCompleted: async () => {
    console.warn('Game Context not mounted');
  },
  contextPlayers: [
    { id: 'p0', name: '' },
    { id: 'p1', name: '' },
  ],
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
