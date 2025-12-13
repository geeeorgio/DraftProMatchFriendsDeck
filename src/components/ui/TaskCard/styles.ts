import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    aspectRatio: 0.7,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(33),
    paddingHorizontal: wp(40),
  },
  text: {
    fontSize: sp(24),
    fontFamily: FONTS.SemiBoldItalic,
    color: colors.activeYellow,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  timeContainer: {
    width: '66%',
    alignItems: 'center',
    paddingHorizontal: wp(12),
    paddingVertical: hp(10),
  },
  timeText: {
    fontSize: sp(15),
    color: colors.black,
    fontFamily: FONTS.MediumItalic,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
