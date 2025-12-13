import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomActionButtons,
  CustomButton,
  CustomGameHeader,
  CustomScreenWrapper,
  CustomText,
  ExitConfirmationModal,
  KickOffGameAlert,
  TemmatesList,
} from 'src/components';
import {
  MIN_PLAYERS,
  MIN_NUMBER_OF_ROUNDS,
  MAX_NUMBER_OF_ROUNDS,
} from 'src/constants';
import { useGameContext } from 'src/hooks';
import type { MainStackNavigationProp } from 'src/types';

const MainGameSetupScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const {
    contextPlayers,
    contextSetPlayers,
    contextResetPlayers,
    contextNumberOfRounds,
    contextSetNumberOfRounds,
  } = useGameContext();

  const [showExitModal, setShowExitModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const flatListRef = useRef<any>(null);
  const atLeastOnePlayer = contextPlayers.some((player) => player !== '');
  const canNotKickOffGame = contextPlayers.some((player) => player === '');

  const canShowExitModal = !showExitModal && atLeastOnePlayer;
  const canRemovePlayer = contextPlayers.length > MIN_PLAYERS;

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (canShowExitModal) {
        e.preventDefault();
        setShowExitModal(true);
      }
    });
    return unsubscribe;
  }, [navigation, canShowExitModal]);

  const handlePlayerChange = (index: number, text: string) => {
    contextSetPlayers((prev: string[]) => {
      const updated = [...prev];
      updated[index] = text;
      return updated;
    });
  };

  const handlePlayerRemove = (index: number) => {
    contextSetPlayers((prev: string[]) => {
      if (prev.length <= MIN_PLAYERS) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleAddPlayer = () => {
    contextSetPlayers((prev: string[]) => [...prev, '']);
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleDecreaseRounds = () => {
    if (contextNumberOfRounds > MIN_NUMBER_OF_ROUNDS) {
      contextSetNumberOfRounds(contextNumberOfRounds - 1);
    }
  };

  const handleIncreaseRounds = () => {
    if (contextNumberOfRounds < MAX_NUMBER_OF_ROUNDS) {
      contextSetNumberOfRounds(contextNumberOfRounds + 1);
    }
  };

  const handleExitConfirm = () => {
    setShowExitModal(false);
    contextResetPlayers();
    contextSetNumberOfRounds(MIN_NUMBER_OF_ROUNDS);
    navigation.goBack();
  };

  const handleExitCancel = () => setShowExitModal(false);

  const handleKickOffGame = () => {
    if (!canNotKickOffGame) {
      navigation.navigate('MainGameScreen');
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  const handleAboutPress = () => navigation.navigate('AboutScreen');

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.contentWrapper}>
        <CustomGameHeader
          title="Add Teammates"
          rightButtonIcon="info"
          onRightButtonPress={handleAboutPress}
        />
        <View style={styles.listContainer}>
          <TemmatesList
            players={contextPlayers}
            onPlayerChange={handlePlayerChange}
            onPlayerRemove={handlePlayerRemove}
            canRemovePlayer={canRemovePlayer}
            listRef={flatListRef}
          />
        </View>

        <CustomButton onPress={handleAddPlayer} extraStyle={styles.addButton}>
          <CustomText extraStyle={styles.addButtonText}>+</CustomText>
        </CustomButton>

        <CustomActionButtons
          handleDecreaseRounds={handleDecreaseRounds}
          handleIncreaseRounds={handleIncreaseRounds}
          contextNumberOfRounds={contextNumberOfRounds}
        />
      </View>

      <CustomButton
        onPress={handleKickOffGame}
        extraStyle={styles.kickOffButton}
      >
        <CustomText extraStyle={styles.kickOffButtonText}>
          KICK OFF GAME
        </CustomText>
      </CustomButton>

      <ExitConfirmationModal
        visible={showExitModal}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />

      <KickOffGameAlert
        visible={showAlert}
        message="Please enter all players' names to start the game"
      />
    </CustomScreenWrapper>
  );
};

export default MainGameSetupScreen;
