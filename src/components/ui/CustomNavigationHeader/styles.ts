import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: hp(60),
    paddingHorizontal: wp(20),
  },
  header: {
    width: '100%',
    height: hp(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(8),
  },
  backButton: {
    width: wp(60),
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    height: '100%',
  },
  title: {
    fontSize: sp(18),
    color: colors.blueText,
    fontFamily: FONTS.MediumItalic,
    textTransform: 'uppercase',
  },
});
