import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import {
  MAIN_BACKGROUND,
  MAX_NUMBER_OF_ROUNDS,
  MIN_NUMBER_OF_ROUNDS,
} from 'src/constants';
import { GameContext } from 'src/hooks';
import type { PlayerData } from 'src/types';
import { getItemFromStorage, setItemInStorage, STORE_KEYS } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [players, setPlayers] = useState<PlayerData[]>([
    { id: 'p0', name: '' },
    { id: 'p1', name: '' },
  ]);
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

  const contextSetIsOnboardingCompleted = useCallback(async () => {
    setIsOnboardingCompleted(true);
    await setItemInStorage(STORE_KEYS.IS_ONBOARDING_COMPLETED, true);
  }, []);

  const contextResetPlayers = useCallback(() => {
    setPlayers([
      { id: String(Date.now()), name: '' },
      { id: String(Date.now() + 1), name: '' },
    ]);
  }, []);

  const contextSetNumberOfRounds = useCallback<typeof setNumberOfRounds>(
    (nOrFn) => {
      setNumberOfRounds((prev) => {
        const next = typeof nOrFn === 'function' ? nOrFn(prev) : nOrFn;

        if (next <= MAX_NUMBER_OF_ROUNDS && next >= MIN_NUMBER_OF_ROUNDS) {
          return next;
        }
        return prev;
      });
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      isContextLoading: isLoading,
      contextBackground: MAIN_BACKGROUND,
      contextIsOnboardingCompleted: isOnboardingCompleted,
      contextSetIsOnboardingCompleted,
      contextPlayers: players,
      contextSetPlayers: setPlayers,
      contextResetPlayers,
      contextNumberOfRounds: numberOfRounds,
      contextSetNumberOfRounds,
    }),
    [
      isLoading,
      isOnboardingCompleted,
      players,
      numberOfRounds,
      contextSetIsOnboardingCompleted,
      contextResetPlayers,
      contextSetNumberOfRounds,
      setPlayers,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
