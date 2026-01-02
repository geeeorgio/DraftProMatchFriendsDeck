import React from 'react';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';

const AboutScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomContainer extraStyle={styles.aboutContainer}>
        <CustomText extraStyle={styles.text}>
          Become Better Than Before is your quick sports break between real
          games, workouts, and busy days. The app turns any short pause into a
          mini-stadium where you and your friends act out goals, copy coaches
          and fans, shout team names, and race the clock in fast Squad Match
          rounds. When time runs out, the squad decides together: count the
          match or call it a miss. No leagues, no pressure. Just movement,
          laughs, and friendly competition.
        </CustomText>
        <CustomText extraStyle={styles.text}>
          When you need something more relaxed, try Timeline Hero Mode. Sort
          famous sports moments into their timeline, think your way through the
          challenge, and enjoy a slower break while your body rests.
        </CustomText>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default AboutScreen;
