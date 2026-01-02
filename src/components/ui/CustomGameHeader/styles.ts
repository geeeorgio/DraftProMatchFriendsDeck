import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(8),
  },
  backButton: {
    width: wp(58),
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: sp(16),
    color: colors.blueText,
    fontFamily: FONTS.MediumItalic,
    textTransform: 'uppercase',
  },
  rightButton: {
    width: wp(58),
    height: '100%',
  },
});
