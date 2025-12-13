import React, { useState, useEffect, useCallback } from 'react';
import { TextInput } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { colors } from 'src/constants';

type CustomInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onRemove?: () => void;
  index: number;
  canRemove?: boolean;
};

const CustomInput = ({
  value,
  onChangeText,
  onRemove,
  index,
  canRemove = true,
}: CustomInputProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const saveValueToContext = useCallback(() => {
    if (inputValue !== value) {
      onChangeText(inputValue);
    }
  }, [inputValue, value, onChangeText]);

  return (
    <CustomContainer extraStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Teammate ${index + 1}`}
        placeholderTextColor={colors.shadowText}
        value={inputValue}
        onChangeText={setInputValue}
        onEndEditing={saveValueToContext}
      />
      {canRemove && index > 1 && (
        <CustomButton onPress={onRemove} extraStyle={styles.removeButton}>
          <CustomText extraStyle={styles.removeButtonText}>−</CustomText>
        </CustomButton>
      )}
    </CustomContainer>
  );
};

export default CustomInput;
