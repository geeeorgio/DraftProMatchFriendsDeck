import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aboutContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(16),
    padding: wp(20),
  },
  text: {
    fontSize: sp(14),
    fontFamily: FONTS.Medium,
    lineHeight: sp(20),
  },
});
