import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './Styles';
import {COLORS} from '../../shared/theme';
import {Paths} from '../../assets/images/imagesPath/Path';

const TextInputWithIcon = props => {
  const [display, setDisplay] = useState(false);
  return (
    <View
      style={[styles.headComponent, {marginTop: props?.marginTop || hp('3%')}]}>
      <TextInput
      keyboardType={props?.keyboardType}
        multiline={props?.multiline}
        secureTextEntry={display ? false : props?.secureTextEntry}
        value={props?.value}
        onChangeText={props?.onChangeText}
        onBlur={props?.onBlur}
        placeholderTextColor={props?.placeholderTextColor || COLORS.lightGrey4}
        style={[styles.txtInputWithIcon]}
        placeholder={props?.name}
      />
      <TouchableOpacity
        onPress={() => {
          setDisplay(!display);
        }}
        style={styles.eyePositionStyle}>
        {display ? (
          <Image style={{width: 24, height: 24}} source={Paths.CloseEye} />
        ) : (
          props?.iconSvg
        )}
      </TouchableOpacity>
    </View>
  );
};
export default TextInputWithIcon;
