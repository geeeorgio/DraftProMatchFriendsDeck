import type { RefObject } from 'react';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import CustomInput from '../CustomInput/CustomInput';

import { styles } from './styles';

import type { PlayerData } from 'src/types';

type TemmatesListProps = {
  players: PlayerData[];
  onPlayerChange: (id: string, text: string) => void;
  onPlayerRemove: (id: string) => void;
  canRemovePlayer?: boolean;
  listRef: RefObject<any>;
};

const TemmatesList = ({
  players,
  onPlayerChange,
  onPlayerRemove,
  canRemovePlayer = true,
  listRef,
}: TemmatesListProps) => {
  const keyExtractor = useCallback((item: PlayerData) => {
    return item.id;
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: PlayerData; index: number }) => (
      <CustomInput
        value={item.name}
        onChangeText={(text) => onPlayerChange(item.id, text)}
        onRemove={() => onPlayerRemove(item.id)}
        index={index}
        canRemove={canRemovePlayer}
      />
    ),
    [onPlayerChange, onPlayerRemove, canRemovePlayer],
  );

  return (
    <FlatList
      ref={listRef}
      data={players}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TemmatesList;
