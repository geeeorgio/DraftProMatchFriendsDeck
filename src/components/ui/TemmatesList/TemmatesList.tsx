import type { RefObject } from 'react';
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';

import CustomInput from '../CustomInput/CustomInput';

import { styles } from './styles';

type TemmatesListProps = {
  players: string[];
  onPlayerChange: (index: number, text: string) => void;
  onPlayerRemove: (index: number) => void;
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
  const keyExtractor = useCallback((_: string, index: number) => {
    return index.toString();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => (
      <CustomInput
        value={item}
        onChangeText={(text) => onPlayerChange(index, text)}
        onRemove={() => onPlayerRemove(index)}
        index={index}
        canRemove={canRemovePlayer}
      />
    ),
    [onPlayerChange, onPlayerRemove, canRemovePlayer],
  );

  const handleContentSizeChange = useCallback(() => {
    listRef.current?.scrollToEnd({ animated: true });
  }, [listRef]);

  return (
    <FlatList
      ref={listRef}
      data={players}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      onContentSizeChange={handleContentSizeChange}
    />
  );
};

export default TemmatesList;
