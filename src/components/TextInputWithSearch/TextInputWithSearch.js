import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextInputWithSearch = props => {
  return (
    <View
      style={[styles.headComponent, {marginTop: props?.marginTop || hp('1%')}]}>
      <TextInput
        style={styles.txtInputWithSearch}
        placeholder={props?.name}
        value={props?.value}
        onChangeText={props?.onChangeText}
        onSubmitEditing={props?.onSubmitEditing}
      />

      {props?.iconSvg}
    </View>
  );
};

export default TextInputWithSearch;
