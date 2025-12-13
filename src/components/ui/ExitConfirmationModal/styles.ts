import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  modal: {
    width: '100%',
    maxWidth: wp(320),
    paddingTop: hp(24),
    borderRadius: wp(14),
    gap: hp(20),
    backgroundColor: colors.bluredBackground,
  },
  textContainer: {
    gap: hp(8),
    paddingHorizontal: wp(16),
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
    textAlign: 'center',
  },
  message: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    borderTopWidth: wp(1),
    borderTopColor: colors.grayBorder,
  },
  button: {
    flex: 1,
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    borderRightWidth: wp(1),
    borderRightColor: colors.grayBorder,
  },
  rightButton: {
    borderLeftWidth: wp(1),
    borderLeftColor: colors.grayBorder,
  },
  cancelButtonText: {
    fontSize: sp(17),
    color: colors.redContainer,
    fontFamily: FONTS.Regular,
  },
  confirmButtonText: {
    fontSize: sp(17),
    color: colors.activeYellow,
    fontFamily: FONTS.Regular,
  },
});
