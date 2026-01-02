import React from 'react';
import { ImageBackground, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import type { TaskType } from 'src/constants';
import { CARD_BKGD } from 'src/constants';

interface TaskCardProps {
  task: TaskType;
  isPreview?: boolean;
}

const TaskCard = ({ task, isPreview = true }: TaskCardProps) => {
  const timeText = `${task.time / 1000} seconds`;

  return (
    <ImageBackground
      source={CARD_BKGD}
      style={styles.background}
      resizeMode="contain"
    >
      <View style={styles.content}>
        <CustomText extraStyle={styles.text}>{task.text}</CustomText>
        {isPreview && (
          <CustomContainer variant="red" extraStyle={styles.timeContainer}>
            <CustomText extraStyle={styles.timeText}>{timeText}</CustomText>
          </CustomContainer>
        )}
      </View>
    </ImageBackground>
  );
};

export default TaskCard;
