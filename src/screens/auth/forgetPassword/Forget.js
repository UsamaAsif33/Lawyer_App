import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Back from '../../../assets/svgs/Back';
import {styles} from './Styles';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import ButtonComp from '../../../components/Button/ButtonComp';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import { navigate } from '../../../navigation/rootNavigation';

const ForgetSchema = Yup.object({
  name: Yup.string()
    .test(
      'is-valid-email-or-phone',
      'Please enter a valid email or phone number',
      value => {
        // Check if the value matches either email or phone number format
        return (
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
          /^[0-9]{11}$/.test(value)
        );
      }
    )
    .required('Please enter your email or phone number'),
});

const Forget = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AuthHeader icon={<Back />} />
      <View style={styles.headcomponent}>
        <Text style={styles.txtForgetPassword}>Forget Password</Text>
        <Text style={styles.txtResetPassword}>
          {' '}
          Enter email or phone number to reset your password
        </Text>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={ForgetSchema}
          onSubmit={values => {
            navigate('VerificationCode');
            // console.log(values);
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldTouched,
          }) => (
            <>
              <TextInputWithIcon
                name={'Enter Email or phone Number'}
                marginTop={hp('3%')}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                <Text style={styles.ErrorMsgStyle}>{errors.name}</Text>
              )}
              <ButtonComp
                onPress={handleSubmit}
                btnStyle={styles.btnStyle}
                txtStyle={styles.txtStyle}
                text={'Continue'}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default Forget;
