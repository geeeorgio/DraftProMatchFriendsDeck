import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamsList = {
  HomeScreen: undefined;
  MainGameScreen: undefined;
  MainGameSetupScreen: undefined;
  SecondGameScreen: undefined;
  AboutScreen: undefined;
  SettingsScreen: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamsList>;
