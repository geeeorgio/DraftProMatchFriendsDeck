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
          Draft ProMatch Friends Deck is your fun sports break between real
          games, workouts, and busy days. The app turns any timeout into a
          mini-stadium where you and your friends act out goals, shout team
          names, copy coaches and fans, and race against the clock in quick
          Squad Match rounds. When time runs out, the squad decides together:
          Count the Match or Missed the Shot — no league tables, just laughs and
          friendly rivalry.
        </CustomText>
        <CustomText extraStyle={styles.text}>
          When you want a quieter break, switch to Timeline Hero Mode and sort
          historic sports moments into the correct order. It’s a calm way to
          keep your mind sharp while your body rests.
        </CustomText>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default AboutScreen;
