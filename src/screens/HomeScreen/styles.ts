import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: hp(20),
    paddingBottom: hp(40),
  },
  iconsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: wp(12),
  },
  topButton: {
    padding: wp(16),
  },
  gameButtonsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(16),
  },
  gameButton: {
    width: '100%',
    padding: wp(16),
  },
  gameButtonText: {
    fontSize: sp(16),
    color: colors.blueText,
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
