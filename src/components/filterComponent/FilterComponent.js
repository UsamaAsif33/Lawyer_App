import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Filter from '../../assets/svgs/Filter';
import {styles} from './Styles';

const FilterComponent = ({onPress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Filter />
    </TouchableOpacity>
  );
};

export default FilterComponent;
