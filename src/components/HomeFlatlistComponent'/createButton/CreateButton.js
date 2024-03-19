import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text14} from '../../Text/Text';
import {styles} from './CreateButtonStyle';
import {COLORS} from '../../../shared/theme';

const CreateButton = ({text, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isSelected ? COLORS.primary : COLORS.white},
      ]}>
      <Text14
        textStyle={[styles.height, isSelected ? styles.color : COLORS.black]}>
        {text}
      </Text14>
    </TouchableOpacity>
  );
};

export default CreateButton;
