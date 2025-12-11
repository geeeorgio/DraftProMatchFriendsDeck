import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { handleShare } from 'src/utils';

const SettingsScreen = () => {
  const handleSharePress = () => {
    handleShare();
  };

  const handleTermsOfUsePress = () => {
    console.log('Terms of Use to be implemented');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.settingsContainer}>
        <CustomContainer extraStyle={styles.settingsItem}>
          <CustomButton
            extraStyle={styles.shareButton}
            onPress={handleSharePress}
          >
            <CustomIcon name="share" />
          </CustomButton>
          <CustomText extraStyle={styles.settingsItemText}>
            Share the app
          </CustomText>
        </CustomContainer>

        <CustomContainer extraStyle={styles.settingsItem}>
          <CustomButton
            extraStyle={styles.shareButton}
            onPress={handleTermsOfUsePress}
          >
            <CustomIcon name="document" />
          </CustomButton>

          <CustomText extraStyle={styles.settingsItemText}>
            Terms of Use
          </CustomText>
        </CustomContainer>
      </View>
    </CustomScreenWrapper>
  );
};

export default SettingsScreen;
