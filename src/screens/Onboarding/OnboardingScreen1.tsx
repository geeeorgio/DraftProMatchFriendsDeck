import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { EXTRA_BKGDS } from 'src/constants';
import { useGameContext } from 'src/hooks';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const { contextSetIsOnboardingCompleted } = useGameContext();

  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen2');
  };

  const handleSkip = async () => {
    await contextSetIsOnboardingCompleted();
  };

  return (
    <ImageBackground
      source={EXTRA_BKGDS.onboarding_1}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity
        onPress={handleSkip}
        style={styles.skipButton}
        hitSlop={10}
      >
        <CustomText extraStyle={styles.skipText}>Skip</CustomText>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.onbdContainer}>
          <CustomText extraStyle={styles.title}>
            Time Out from the Game
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Every match needs a break. Friends Sports Deck turns your timeout
            into a fun mini-stadium, where you leave the scoreboard behind and
            just laugh with your squad
          </CustomText>

          <View style={styles.indicatorContainer}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === 0 && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          <CustomButton
            onPress={handleNext}
            // variant="yellow"
            extraStyle={styles.button}
          >
            <CustomText extraStyle={styles.buttonText}>Next</CustomText>
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen1;
