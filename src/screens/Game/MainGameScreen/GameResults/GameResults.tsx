import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import type { MatchCount, PlayerData } from 'src/types';

interface GameResultsProps {
  playerStats: PlayerData[];
  matchCount: MatchCount;
  onSharePress: () => void;
  onHomePress: () => void;
}

const GameResults = ({
  playerStats,
  matchCount,
  onSharePress,
  onHomePress,
}: GameResultsProps) => {
  return (
    <View style={styles.contentWrapper}>
      <ScrollView
        style={styles.leaderboardContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.leaderboardContentContainer}
      >
        {playerStats
          .map((player) => ({
            name: player.name,
            wins: matchCount[String(player.id)] || 0,
            id: player.id,
          }))
          .sort((a, b) => b.wins - a.wins)
          .map((player, index) => (
            <CustomContainer
              key={player.id}
              extraStyle={styles.leaderboardItem}
            >
              {index === 0 && (
                <CustomContainer
                  // variant="green"
                  extraStyle={styles.championContainer}
                >
                  <CustomText extraStyle={styles.championText}>
                    🏆 Champion
                  </CustomText>
                </CustomContainer>
              )}
              <View style={styles.playerInfoContainer}>
                <CustomText extraStyle={styles.leaderboardName}>
                  {player.name}
                </CustomText>
                <CustomText extraStyle={styles.leaderboardWins}>
                  {player.wins} successful challenges
                </CustomText>
              </View>
            </CustomContainer>
          ))}
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton onPress={onSharePress} extraStyle={styles.shareButton}>
          <CustomIcon name="share" />
        </CustomButton>
        <CustomButton onPress={onHomePress} extraStyle={styles.homeButton}>
          <CustomText extraStyle={styles.homeButtonText}>Home</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default GameResults;
