import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomIcon,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { EXTRA_BKGDS } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleStartSquadMatch = () => {
    navigation.navigate('MainGameSetupScreen');
  };

  const handleTimelineChallenge = () => {
    navigation.navigate('SecondGameScreen');
  };

  const handleInfo = () => {
    navigation.navigate('AboutScreen');
  };

  const handleSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <ImageBackground
      source={EXTRA_BKGDS.home_bg}
      style={styles.background}
      resizeMode="cover"
    >
      <CustomScreenWrapper extraStyle={styles.contentWrapper}>
        <View style={styles.iconsContainer}>
          <CustomButton onPress={handleInfo} extraStyle={styles.topButton}>
            <CustomIcon name="info" />
          </CustomButton>
          <CustomButton onPress={handleSettings} extraStyle={styles.topButton}>
            <CustomIcon name="settings" />
          </CustomButton>
        </View>
        <View style={styles.gameButtonsContainer}>
          <CustomButton
            onPress={handleStartSquadMatch}
            extraStyle={styles.gameButton}
          >
            <CustomText extraStyle={styles.gameButtonText}>
              Start Squad Match
            </CustomText>
          </CustomButton>
          <CustomButton
            onPress={handleTimelineChallenge}
            extraStyle={styles.gameButton}
          >
            <CustomText extraStyle={styles.gameButtonText}>
              Timeline Challenge
            </CustomText>
          </CustomButton>
        </View>
      </CustomScreenWrapper>
    </ImageBackground>
  );
};

export default HomeScreen;
