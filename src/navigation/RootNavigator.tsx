import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useGameContext } from 'src/hooks';
import type { RootStackParamsList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const { contextIsOnboardingCompleted } = useGameContext();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      {contextIsOnboardingCompleted ? (
        <RootStack.Screen name="MainStack" component={MainNavigator} />
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
