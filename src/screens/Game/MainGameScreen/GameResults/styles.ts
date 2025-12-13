import { StyleSheet } from 'react-native';

import { colors, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaderboardContainer: {
    width: '100%',
    gap: hp(16),
  },
  leaderboardItem: {
    width: '100%',
    alignItems: 'center',
    gap: hp(12),
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
  },
  championContainer: {
    width: '66%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
  },
  championText: {
    fontSize: sp(18),
    fontFamily: FONTS.MediumItalic,
    textTransform: 'uppercase',
  },
  playerInfoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(12),
  },
  leaderboardName: {
    fontSize: sp(18),
    fontFamily: FONTS.Medium,
  },
  leaderboardWins: {
    fontSize: sp(13),
    fontFamily: FONTS.MediumItalic,
    color: colors.activeYellow,
  },
  gameInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp(20),
    marginTop: hp(8),
  },
  gameInfoText: {
    fontSize: sp(14),
    fontFamily: FONTS.Regular,
    color: colors.shadowText,
  },
  footer: {
    width: '100%',
    height: hp(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(8),
  },
  shareButton: {
    width: wp(58),
    height: '100%',
  },
  homeButton: {
    flex: 1,
    height: '100%',
  },
  homeButtonText: {
    fontSize: sp(18),
    color: colors.black,
    fontFamily: FONTS.SemiBoldItalic,
    textTransform: 'uppercase',
  },
});
