import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp(12),
    paddingRight: wp(6),
    paddingVertical: hp(6),
  },
  input: {
    fontSize: sp(14),
    fontFamily: FONTS.Medium,
    color: colors.white,
  },
  removeButton: {
    width: wp(48),
    height: wp(48),
    borderRadius: wp(24),
  },
  removeButtonText: {
    fontSize: sp(28),
    color: colors.black,
    fontFamily: FONTS.Regular,
    lineHeight: sp(28),
  },
});
