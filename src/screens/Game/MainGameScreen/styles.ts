import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: hp(30),
    paddingBottom: hp(30),
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeToStartText: {
    fontSize: sp(90),
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
