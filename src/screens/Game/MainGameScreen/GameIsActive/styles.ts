import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    gap: wp(12),
  },
  winButton: {
    width: '100%',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
  },
  loseButton: {
    width: '100%',
    paddingVertical: hp(12),
    paddingHorizontal: wp(24),
  },
  btnText: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
  winBtnText: {
    color: colors.black,
  },
  loseBtnText: {
    color: colors.white,
  },
  timeToAnswerContainer: {
    width: wp(100),
    height: hp(100),
    borderRadius: wp(50),
    borderWidth: wp(1),
    borderColor: colors.activeYellow,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  timeToStartText: {
    fontSize: sp(50),
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
    lineHeight: sp(50),
    textAlign: 'center',
  },
  timeToAnswerText: {
    fontSize: sp(90),
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
