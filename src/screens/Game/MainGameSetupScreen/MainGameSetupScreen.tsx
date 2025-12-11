import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { CustomGameHeader, CustomScreenWrapper } from 'src/components';
import type { MainStackNavigationProp } from 'src/types';

const MainGameSetupScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const onAboutIconPress = () => {
    navigation.navigate('AboutScreen');
  };

  return (
    <CustomScreenWrapper>
      <CustomGameHeader
        title="Add Teammates"
        rightButtonIcon="info"
        onRightButtonPress={onAboutIconPress}
      />
    </CustomScreenWrapper>
  );
};

export default MainGameSetupScreen;
