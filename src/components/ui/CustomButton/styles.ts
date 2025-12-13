import { StyleSheet } from 'react-native';

import { colors } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(32),
  },
  green: {
    backgroundColor: colors.greenContainer,
  },
  yellow: {
    backgroundColor: colors.activeYellow,
  },
  red: {
    backgroundColor: colors.incorrectRed,
  },
  disabled: {
    backgroundColor: colors.inactiveYellow,
  },
  pressed: {
    opacity: 0.5,
  },
});
