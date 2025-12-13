import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText, TaskCard } from 'src/components';
import type { TaskType } from 'src/constants';

interface GameIsActiveProps {
  currentTask: TaskType;
  timeToAnswer: number;
  roundCompleted: boolean;
  handleCountTheMatch: () => void;
  handleMissedShot: () => void;
}

const GameIsActive = ({
  currentTask,
  timeToAnswer,
  roundCompleted,
  handleCountTheMatch,
  handleMissedShot,
}: GameIsActiveProps) => {
  return (
    <View style={styles.contentWrapper}>
      <TaskCard task={currentTask} isPreview={false} />

      {roundCompleted ? (
        <View style={styles.buttonsContainer}>
          <CustomButton
            onPress={handleCountTheMatch}
            extraStyle={styles.winButton}
          >
            <CustomText extraStyle={[styles.winBtnText, styles.btnText]}>
              Count the Match
            </CustomText>
          </CustomButton>
          <CustomButton
            onPress={handleMissedShot}
            variant="red"
            extraStyle={styles.loseButton}
          >
            <CustomText extraStyle={[styles.loseBtnText, styles.btnText]}>
              Missed the Shot
            </CustomText>
          </CustomButton>
        </View>
      ) : (
        <View style={styles.timeToAnswerContainer}>
          <CustomText extraStyle={styles.timeToStartText}>
            {timeToAnswer}
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default GameIsActive;
