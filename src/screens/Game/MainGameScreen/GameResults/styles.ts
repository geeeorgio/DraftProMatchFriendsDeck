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
    flex: 1,
    width: '100%',
  },
  leaderboardContentContainer: {
    gap: hp(16),
    paddingBottom: hp(30),
  },
  leaderboardItem: {
    width: '100%',
    alignItems: 'center',
    gap: hp(6),
    paddingVertical: hp(12),
    paddingHorizontal: wp(16),
  },
  championContainer: {
    width: '66%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
    borderWidth: wp(1),
    borderColor: colors.greenContainer,
    borderRadius: wp(32),
  },
  championText: {
    fontSize: sp(16),
    fontFamily: FONTS.MediumItalic,
    textTransform: 'uppercase',
  },
  playerInfoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(4),
  },
  leaderboardName: {
    fontSize: sp(16),
    fontFamily: FONTS.Medium,
  },
  leaderboardWins: {
    fontSize: sp(12),
    fontFamily: FONTS.MediumItalic,
    color: colors.shadowText,
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
