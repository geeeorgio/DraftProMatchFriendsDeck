import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';
import { GameContext } from 'src/hooks';
import { getItemFromStorage, setItemInStorage, STORE_KEYS } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [background] = useState<ImageSourcePropType>(MAIN_BACKGROUND);

  useEffect(() => {
    const initialized = async () => {
      try {
        const [savedOnboarding] = await Promise.all([
          getItemFromStorage(STORE_KEYS.IS_ONBOARDING_COMPLETED),
        ]);

        setIsOnboardingCompleted(savedOnboarding);
      } catch (e) {
        console.error('Error initializing data from storage:', e);
      } finally {
        setIsLoading(false);
      }
    };

    initialized();
  }, []);

  const contextSetIsOnboardingCompleted = async () => {
    try {
      setIsOnboardingCompleted(true);
      await setItemInStorage(STORE_KEYS.IS_ONBOARDING_COMPLETED, true);
    } catch (e) {
      console.error('Error completing onboarding:', e);
    }
  };

  return (
    <GameContext.Provider
      value={{
        isContextLoading: isLoading,
        contextBackground: background,
        contextIsOnboardingCompleted: isOnboardingCompleted,
        contextSetIsOnboardingCompleted,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
