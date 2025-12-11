import React from 'react';
import { TextInput } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { colors } from 'src/constants';

const CustomInput = () => {
  return (
    <CustomContainer extraStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add Teammate"
        placeholderTextColor={colors.shadowText}
      />
    </CustomContainer>
  );
};

export default CustomInput;
