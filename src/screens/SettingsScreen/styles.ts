import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(16),
  },
  settingsItem: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(16),
    padding: wp(18),
    minHeight: hp(140),
    maxHeight: hp(160),
  },
  shareButton: {
    padding: wp(16),
  },
  settingsItemText: {
    fontSize: sp(14),
    fontFamily: FONTS.Medium,
  },
});
