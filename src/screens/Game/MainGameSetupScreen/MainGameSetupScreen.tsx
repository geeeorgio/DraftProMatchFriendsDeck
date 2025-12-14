import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const atLeastOnePlayer = contextPlayers.some(
    (player) => player.name.trim() !== '',
  );

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

  const handlePlayerChange = useCallback(
    (id: string, text: string) => {
      contextSetPlayers((prev) =>
        prev.map((player) =>
          player.id === id ? { ...player, name: text } : player,
        ),
      );
    },
    [contextSetPlayers],
  );

  const handlePlayerRemove = useCallback(
    (id: string) => {
      contextSetPlayers((prev) => {
        if (prev.length <= MIN_PLAYERS) return prev;
        return prev.filter((player) => player.id !== id);
      });
    },
    [contextSetPlayers],
  );

  const handleAddPlayer = useCallback(() => {
    contextSetPlayers((prev) => [
      ...prev,
      { id: String(Date.now()), name: '' },
    ]);
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [contextSetPlayers]);

  const handleDecreaseRounds = useCallback(() => {
    contextSetNumberOfRounds((prev) =>
      prev > MIN_NUMBER_OF_ROUNDS ? prev - 1 : prev,
    );
  }, [contextSetNumberOfRounds]);

  const handleIncreaseRounds = useCallback(() => {
    contextSetNumberOfRounds((prev) =>
      prev < MAX_NUMBER_OF_ROUNDS ? prev + 1 : prev,
    );
  }, [contextSetNumberOfRounds]);

  const handleExitConfirm = useCallback(() => {
    setShowExitModal(false);
    contextSetNumberOfRounds(MIN_NUMBER_OF_ROUNDS);
    contextResetPlayers();
    navigation.goBack();
  }, [contextResetPlayers, contextSetNumberOfRounds, navigation]);

  const handleExitCancel = useCallback(() => setShowExitModal(false), []);

  const handleKickOffGame = useCallback(() => {
    const cleanedPlayers = contextPlayers.map((player) => ({
      ...player,
      name: player.name.trim(),
    }));

    const hasEmpty = cleanedPlayers.some((p) => p.name === '');

    if (hasEmpty) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }

    contextSetPlayers(cleanedPlayers);

    requestAnimationFrame(() => {
      navigation.navigate('MainGameScreen');
    });
  }, [contextPlayers, contextSetPlayers, navigation]);

  const handleAboutPress = useCallback(
    () => navigation.navigate('AboutScreen'),
    [navigation],
  );

  const handleBackPress = useCallback(() => {
    if (atLeastOnePlayer) {
      navigation.goBack();
      return;
    }

    contextResetPlayers();
    contextSetNumberOfRounds(MIN_NUMBER_OF_ROUNDS);

    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    });
  }, [
    atLeastOnePlayer,
    contextResetPlayers,
    contextSetNumberOfRounds,
    navigation,
  ]);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.contentWrapper}>
        <CustomGameHeader
          title="Add Teammates"
          rightButtonIcon="info"
          onRightButtonPress={handleAboutPress}
          onBackPress={handleBackPress}
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
