import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORE_KEYS = {
  IS_ONBOARDING_COMPLETED: 'isOnboardingCompleted',
  BACKGROUND: 'background',
};

export const getItemFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting item from storage:', e);
    return null;
  }
};

export const setItemInStorage = async <T>(
  key: string,
  value: T,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting item in storage:', e);
  }
};
