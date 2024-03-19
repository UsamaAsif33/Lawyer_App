import {View, Text, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import Back from '../../../assets/svgs/Back';
import ButtonComp from '../../../components/Button/ButtonComp';

const Verification = () => {
  const navigation = useNavigation();
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const handleTextInputChange = (text, nextInputRef) => {
    if (text.length === 1 && nextInputRef.current) {
      nextInputRef.current.setNativeProps({selection: {start: 0, end: 0}});
      nextInputRef.current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <AuthHeader icon={<Back />} />
      <View style={styles.headcomponent}>
        <Text style={styles.txtVerificationCode}>Verification Code</Text>
        <Text style={styles.txtVerifyEmailPhone}>
          Enter the Verification you have received on your email or phone number
        </Text>
        <View style={styles.textInputHead}>
          <TextInput
            placeholder="-"
            maxLength={1}
            keyboardType="numeric"
            onChangeText={text => handleTextInputChange(text, secondInputRef)}
            style={styles.inputText}></TextInput>
          <TextInput
            placeholder="-"
            ref={secondInputRef}
            keyboardType="numeric"
            onChangeText={text => handleTextInputChange(text, thirdInputRef)}
            maxLength={1}
            style={styles.inputText}></TextInput>
          <TextInput
            placeholder="-"
            ref={thirdInputRef}
            keyboardType="numeric"
            onChangeText={text => handleTextInputChange(text, fourthInputRef)}
            maxLength={1}
            style={styles.inputText}></TextInput>
          <TextInput
            placeholder="-"
            ref={fourthInputRef}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputText}></TextInput>
        </View>
        <ButtonComp
          btnStyle={styles.btnStyle}
          txtStyle={styles.txtStyle}
          text={'Continue'}
        />
      </View>
    </View>
  );
};

export default Verification;
