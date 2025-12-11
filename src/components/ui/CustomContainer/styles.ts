import { StyleSheet } from 'react-native';

import { colors } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(32),
  },
  black: {
    backgroundColor: colors.black,
    borderColor: colors.white,
    borderWidth: wp(1),
  },
  green: {
    backgroundColor: colors.greenContainer,
  },
  yellow: {
    backgroundColor: colors.activeYellow,
  },
  correct: {
    backgroundColor: colors.black,
    borderColor: colors.greenContainer,
    borderWidth: wp(1),
  },
  incorrect: {
    backgroundColor: colors.black,
    borderColor: colors.incorrectRed,
    borderWidth: wp(1),
  },
});
