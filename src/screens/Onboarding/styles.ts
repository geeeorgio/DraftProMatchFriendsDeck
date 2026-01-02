import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onbdContainer: {
    width: '100%',
    height: '44%',
    backgroundColor: colors.lightRed,
    borderTopRightRadius: wp(20),
    borderTopLeftRadius: wp(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(16),
    paddingHorizontal: wp(20),
    paddingBottom: hp(66),
  },
  title: {
    fontSize: sp(26),
    fontFamily: FONTS.ExtraBold,
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: sp(32),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
    lineHeight: sp(18),
  },
  indicatorContainer: {
    width: '33%',
    marginVertical: hp(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(4),
  },
  indicator: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6),
    backgroundColor: colors.inactiveYellow,
  },
  activeIndicator: {
    backgroundColor: colors.activeYellow,
  },
  button: {
    width: '100%',
    paddingVertical: hp(12),
    borderWidth: wp(1),
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: colors.shadowText,
    borderRadius: wp(32),
  },
  buttonText: {
    fontSize: sp(16),
    color: colors.black,
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
  skipButton: {
    position: 'absolute',
    top: hp(77),
    right: wp(20),
  },
  skipText: {
    fontSize: sp(18),
    color: colors.white,
    fontFamily: FONTS.Medium,
  },
});
