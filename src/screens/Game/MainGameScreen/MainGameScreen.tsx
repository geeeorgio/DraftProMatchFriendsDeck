import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { Text, View } from 'react-native';

import {
  CustomGameHeader,
  CustomScreenWrapper,
  ExitConfirmationModal,
} from 'src/components';
import { useGameContext } from 'src/hooks';
import type { MainStackNavigationProp } from 'src/types';

const MainGameScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const { contextResetPlayers } = useGameContext();
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!showExitModal) {
        e.preventDefault();
        setShowExitModal(true);
      }
    });

    return unsubscribe;
  }, [navigation, showExitModal]);

  const handleExitConfirm = useCallback(() => {
    setShowExitModal(false);
    contextResetPlayers();
    navigation.goBack();
  }, [contextResetPlayers, navigation]);

  const handleExitCancel = useCallback(() => {
    setShowExitModal(false);
  }, []);

  return (
    <CustomScreenWrapper>
      <CustomGameHeader title="Game" />

      <View>
        <Text>MainGameScreen</Text>
      </View>

      <ExitConfirmationModal
        visible={showExitModal}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
    </CustomScreenWrapper>
  );
};

export default MainGameScreen;
