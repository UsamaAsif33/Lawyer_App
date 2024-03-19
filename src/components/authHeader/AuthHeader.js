import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';

const AuthHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => {
          navigation.goBack();
        }}>
        {props?.icon}
      </TouchableOpacity>
      <View style={styles.headIstinsbe}>
        <Image source={require('../../assets/images/MaskGroup.png')} />
        <Text style={styles.txtIstinsbe}>Istinabe</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
