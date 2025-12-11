import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { EXTRA_BKGDS } from 'src/constants';
import { useGameContext } from 'src/hooks';

const OnboardingScreen3 = () => {
  const { contextSetIsOnboardingCompleted } = useGameContext();

  const handleNext = async () => {
    await contextSetIsOnboardingCompleted();
  };

  const handleSkip = async () => {
    await contextSetIsOnboardingCompleted();
  };

  return (
    <ImageBackground
      source={EXTRA_BKGDS.onboarding_3}
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
            Solo Sports Memory Break
          </CustomText>
          <CustomText extraStyle={styles.description}>
            When friends are away, switch to Timeline Challenge. Sort historic
            sports moments in order, keep your mind sharp, and enjoy a quiet
            break
          </CustomText>

          <View style={styles.indicatorContainer}>
            {Array.from({ length: 3 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === 2 && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          <CustomButton
            onPress={handleNext}
            variant="yellow"
            extraStyle={styles.button}
          >
            <CustomText extraStyle={styles.buttonText}>
              Let’s Start the Break
            </CustomText>
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen3;
