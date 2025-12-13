import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import {
  MAIN_BACKGROUND,
  MAX_NUMBER_OF_ROUNDS,
  MIN_NUMBER_OF_ROUNDS,
} from 'src/constants';
import { GameContext } from 'src/hooks';
import { getItemFromStorage, setItemInStorage, STORE_KEYS } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [players, setPlayers] = useState<string[]>(['', '']);
  const [numberOfRounds, setNumberOfRounds] = useState(MIN_NUMBER_OF_ROUNDS);

  useEffect(() => {
    const initialized = async () => {
      try {
        const savedOnboarding = await getItemFromStorage(
          STORE_KEYS.IS_ONBOARDING_COMPLETED,
        );
        setIsOnboardingCompleted(!!savedOnboarding);
      } catch (e) {
        console.error('Error initializing data:', e);
      } finally {
        setIsLoading(false);
      }
    };
    initialized();
  }, []);

  const contextSetIsOnboardingCompleted = async () => {
    setIsOnboardingCompleted(true);
    await setItemInStorage(STORE_KEYS.IS_ONBOARDING_COMPLETED, true);
  };

  const contextResetPlayers = () => setPlayers(['', '']);

  const contextSetNumberOfRounds = (n: number) => {
    if (n <= MAX_NUMBER_OF_ROUNDS && n >= MIN_NUMBER_OF_ROUNDS) {
      setNumberOfRounds(n);
    }
  };

  const contextValue = {
    isContextLoading: isLoading,
    contextBackground: MAIN_BACKGROUND,
    contextIsOnboardingCompleted: isOnboardingCompleted,
    contextSetIsOnboardingCompleted,
    contextPlayers: players,
    contextSetPlayers: setPlayers,
    contextResetPlayers,
    contextNumberOfRounds: numberOfRounds,
    contextSetNumberOfRounds,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
