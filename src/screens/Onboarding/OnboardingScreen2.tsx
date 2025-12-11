import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { EXTRA_BKGDS } from 'src/constants';
import { useGameContext } from 'src/hooks';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen2 = () => {
  const { contextSetIsOnboardingCompleted } = useGameContext();

  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleNext = () => {
    navigation.navigate('OnboardingScreen3');
  };

  const handleSkip = async () => {
    await contextSetIsOnboardingCompleted();
  };

  return (
    <ImageBackground
      source={EXTRA_BKGDS.onboarding_2}
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
            Play Between Real Matches
          </CustomText>
          <CustomText extraStyle={styles.description}>
            Between training, gym sets, or game nights, grab your friends and
            run quick Squad Match rounds. Act out goals, shout team names, copy
            fans and coaches
          </CustomText>

          <View style={styles.indicatorContainer}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === 1 && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          <CustomButton
            onPress={handleNext}
            variant="yellow"
            extraStyle={styles.button}
          >
            <CustomText extraStyle={styles.buttonText}>Next</CustomText>
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen2;
