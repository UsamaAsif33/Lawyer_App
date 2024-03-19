import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import { COLORS } from '../../shared/theme';

const ButtonComp = props => {
  return (
    <TouchableOpacity style={props?.btnStyle} onPress={props?.onPress}>
      {props?.icon}
      <View > 
        {props?.loading ?
        <ActivityIndicator size={25} color={COLORS?.white}/>
         :
        <Text style={props?.txtStyle}>{props?.text}</Text>
      }
      </View>
    </TouchableOpacity>
  );
};

export default memo(ButtonComp);
