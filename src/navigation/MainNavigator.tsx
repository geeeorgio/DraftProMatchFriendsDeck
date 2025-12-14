import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CustomNavigationHeader } from 'src/components';
import {
  AboutScreen,
  HomeScreen,
  MainGameScreen,
  MainGameSetupScreen,
  SecondGameScreen,
  SettingsScreen,
} from 'src/screens';
import type { MainStackParamsList } from 'src/types';

const MainStack = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
        header: (props) => <CustomNavigationHeader props={props} />,
      }}
    >
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="MainGameScreen" component={MainGameScreen} />
      <MainStack.Screen
        name="MainGameSetupScreen"
        component={MainGameSetupScreen}
      />
      <MainStack.Screen
        name="SecondGameScreen"
        component={SecondGameScreen}
        options={{
          title: 'Timeline Challenge',
          headerShown: true,
        }}
      />
      <MainStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: 'About',
          headerShown: true,
        }}
      />
      <MainStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerShown: true,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
