import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.bluredBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    width: '80%',
    maxHeight: hp(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(32),
    padding: wp(16),
  },
  text: {
    fontSize: sp(16),
    fontFamily: FONTS.Regular,
    textAlign: 'center',
  },
});
