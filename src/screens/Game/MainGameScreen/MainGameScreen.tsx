import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import GameIsActive from './GameIsActive/GameIsActive';
import GameResults from './GameResults/GameResults';
import { styles } from './styles';

import {
  CustomGameHeader,
  CustomScreenWrapper,
  CustomText,
  ExitConfirmationModal,
  TaskCard,
} from 'src/components';
import { MIN_NUMBER_OF_ROUNDS } from 'src/constants';
import { useGameContext } from 'src/hooks';
import type { MainStackNavigationProp, MatchCount } from 'src/types';
import { getRandomTask, handleShare } from 'src/utils';

const MainGameScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const {
    contextResetPlayers,
    contextPlayers,
    contextNumberOfRounds,
    contextSetNumberOfRounds,
  } = useGameContext();

  const [showExitModal, setShowExitModal] = useState(false);
  const [timeToStart, setTimeToStart] = useState(3);
  const [indexOfCurrentPlayer, setIndexOfCurrentPlayer] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [roundStarted, setRoundStarted] = useState(false);
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [matchCount, setMatchCount] = useState<MatchCount>({});
  const [currentTask, setCurrentTask] = useState(() => getRandomTask());
  const [timeToAnswer, setTimeToAnswer] = useState(
    () => currentTask.time / 1000,
  );

  const currentPlayer = contextPlayers[indexOfCurrentPlayer];

  useEffect(() => {
    if (showExitModal || roundStarted || gameFinished) return;

    const timer = setInterval(() => {
      setTimeToStart((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(timer);
          setRoundStarted(true);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showExitModal, roundStarted, gameFinished]);

  useEffect(() => {
    if (showExitModal || !roundStarted || roundCompleted || gameFinished)
      return;

    const timer = setInterval(() => {
      setTimeToAnswer((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(timer);
          setRoundCompleted(true);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [roundStarted, roundCompleted, showExitModal, gameFinished]);

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
    contextSetNumberOfRounds(MIN_NUMBER_OF_ROUNDS);
    contextResetPlayers();
    navigation.goBack();
  }, [contextResetPlayers, contextSetNumberOfRounds, navigation]);

  const handleExitCancel = useCallback(() => setShowExitModal(false), []);

  const resetRoundState = useCallback(() => {
    const newTask = getRandomTask();
    setRoundStarted(false);
    setRoundCompleted(false);
    setTimeToStart(3);
    setCurrentTask(newTask);
    setTimeToAnswer(newTask.time / 1000);
  }, []);

  const moveToNextTurn = useCallback(() => {
    const isLastPlayerInRound =
      indexOfCurrentPlayer === contextPlayers.length - 1;
    const isLastRound = currentRound === contextNumberOfRounds;

    if (isLastPlayerInRound && isLastRound) {
      setGameFinished(true);
      setRoundStarted(false);
      setRoundCompleted(false);
    } else if (isLastPlayerInRound) {
      setCurrentRound((prev) => prev + 1);
      setIndexOfCurrentPlayer(0);
      resetRoundState();
    } else {
      setIndexOfCurrentPlayer((prev) => prev + 1);
      resetRoundState();
    }
  }, [
    indexOfCurrentPlayer,
    contextPlayers.length,
    currentRound,
    contextNumberOfRounds,
    resetRoundState,
  ]);

  const handleCountTheMatch = useCallback(() => {
    const playerKey = currentPlayer.id;

    setMatchCount((prev) => ({
      ...prev,
      [playerKey]: (prev[playerKey] || 0) + 1,
    }));
    moveToNextTurn();
  }, [currentPlayer.id, moveToNextTurn]);

  const handleMissedShot = useCallback(
    () => moveToNextTurn(),
    [moveToNextTurn],
  );

  const onSharePress = useCallback(() => handleShare(), []);

  const onHomePress = useCallback(() => {
    contextSetNumberOfRounds(MIN_NUMBER_OF_ROUNDS);
    contextResetPlayers();
    navigation.navigate('HomeScreen');
  }, [contextResetPlayers, contextSetNumberOfRounds, navigation]);

  const handleRightButtonPress = useCallback(() => setShowExitModal(true), []);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomGameHeader
        title={gameFinished ? 'Result Moment' : currentPlayer.name}
        hideBackButton
        rightButtonIcon={gameFinished ? undefined : 'close'}
        onRightButtonPress={handleRightButtonPress}
      />

      {!roundStarted && !gameFinished && (
        <View style={styles.contentWrapper}>
          <TaskCard task={currentTask} />

          <CustomText extraStyle={styles.timeToStartText}>
            {timeToStart}
          </CustomText>
        </View>
      )}

      {roundStarted && !gameFinished && (
        <GameIsActive
          currentTask={currentTask}
          timeToAnswer={timeToAnswer}
          roundCompleted={roundCompleted}
          handleCountTheMatch={handleCountTheMatch}
          handleMissedShot={handleMissedShot}
        />
      )}

      {gameFinished && (
        <GameResults
          playerStats={contextPlayers}
          matchCount={matchCount}
          onSharePress={onSharePress}
          onHomePress={onHomePress}
        />
      )}

      <ExitConfirmationModal
        visible={showExitModal}
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
    </CustomScreenWrapper>
  );
};

export default MainGameScreen;
