import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '80%',
    padding: wp(10),
    marginBottom: hp(20),
  },
  title: {
    fontSize: sp(13),
    color: colors.blueText,
    fontFamily: FONTS.MediumItalic,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  variantsContainer: {
    width: '100%',
    gap: hp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  variantButton: {
    width: '100%',
    padding: wp(12),
    minHeight: hp(90),
    maxHeight: hp(100),
  },
  variantButtonPressed: {
    borderColor: colors.activeYellow,
    borderWidth: wp(1),
  },
  variantButtonCorrect: {
    borderColor: colors.greenContainer,
    borderWidth: wp(1),
  },
  variantButtonIncorrect: {
    borderColor: colors.incorrectRed,
    borderWidth: wp(1),
  },
  variantButtonText: {
    fontSize: sp(13),
    fontFamily: FONTS.Medium,
    textAlign: 'center',
  },
  submitBtn: {
    width: '100%',
    padding: wp(12),
    marginBottom: hp(24),
  },
  submitBtnText: {
    fontSize: sp(18),
    color: colors.blueText,
    fontFamily: FONTS.SemiBoldItalic,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  footer: {
    width: '100%',
    height: hp(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(8),
    marginBottom: hp(24),
  },
  shareButton: {
    width: wp(58),
    height: '100%',
  },
  nextBtn: {
    flex: 1,
    height: '100%',
  },
  nextBtnText: {
    fontSize: sp(18),
    color: colors.blueText,
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
