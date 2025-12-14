import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  roundsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(12),
  },
  roundsTitle: {
    fontSize: sp(20),
    color: colors.white,
    fontFamily: FONTS.SemiBold,
    textTransform: 'uppercase',
  },
  roundsControls: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
  },
  roundButton: {
    width: wp(48),
    height: wp(48),
  },
  roundButtonText: {
    fontSize: sp(28),
    color: colors.black,
    fontFamily: FONTS.Regular,
    lineHeight: sp(28),
  },
  roundsDisplay: {
    flex: 1,
    paddingVertical: hp(6),
    paddingHorizontal: wp(16),
    minWidth: wp(80),
  },
  roundsNumber: {
    fontSize: sp(18),
    color: colors.white,
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
});
