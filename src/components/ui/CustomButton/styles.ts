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
    backgroundColor: colors.bluredBackground,
    borderColor: colors.grayBorder,
    borderWidth: wp(1),
    opacity: 0.88,
  },
  pressed: {
    opacity: 0.5,
  },
});
