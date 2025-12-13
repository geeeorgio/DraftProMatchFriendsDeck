import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    gap: hp(24),
    marginBottom: hp(24),
  },
  listContainer: {
    width: '100%',
    maxHeight: hp(300),
  },
  addButton: {
    width: wp(48),
    height: hp(48),
  },
  addButtonText: {
    fontSize: sp(28),
    color: colors.black,
    fontFamily: FONTS.Regular,
    textAlign: 'center',
    lineHeight: sp(28),
  },
  kickOffButton: {
    width: '100%',
    paddingVertical: hp(16),
    paddingHorizontal: wp(24),
    marginBottom: hp(24),
  },
  kickOffButtonText: {
    fontSize: sp(18),
    color: colors.black,
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
