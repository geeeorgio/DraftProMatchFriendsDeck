import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: wp(20),
    right: wp(20),
    bottom: hp(125),
    backgroundColor: colors.incorrectRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(32),
    paddingHorizontal: wp(10),
    paddingVertical: hp(4),
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
});
