import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';

import Back from '../../../assets/svgs/Back';
import {styles} from './Styles';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import {Text13, Text20} from '../../../components/Text/Text';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import EyePassword from '../../../assets/svgs/EyePassword';
import ButtonComp from '../../../components/Button/ButtonComp';
import {navigate} from '../../../navigation/rootNavigation';
import DropdownBottomIcon from '../../../assets/svgs/DropdownBottomIcon';
import {signUpUserPostReq} from '../../../redux/authentication/AuthActions';
import {
  SignUpSchema,
  signUpInitialValues,
} from '../../../utils/FormikData/formikData';


const SignUp = () => {
  // HOOKS
  const dispatch = useDispatch();
  const [lawyerArea, setLawyerArea] = useState(false);

  let responseSignup = useSelector(state => state?.auth?.status);
  const isLoading = responseSignup == 'loading' ? true : false;

  //  FUNCTIONS
  const onSignUpBtnPress = values => {
    const payload = {
      first_name: values.name,
      last_name: values.lastname,
      email: values.email,
      phone_numbers: values.phonenumber,
      password: values.password,
      lawyer_id: values.lawyerID,
      user_type: values.user_type,
    };
    dispatch(signUpUserPostReq(payload));
  };

  const Data = [
    {label: 'professional_lawyer', value: 'professional_lawyer'},
    {label: 'internee_lawyer', value: 'internee_lawyer'},
  ];

  useEffect(() => {
    if (responseSignup == 'fullfilled') {
      navigate('PackagesPlan');
    }
  }, [responseSignup]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <AuthHeader icon={<Back />} />
        <View style={styles.headcomponent}>
          <Text20 textStyle={styles?.signUpTxt}> Sign Up </Text20>
          <Formik
            initialValues={signUpInitialValues}
            validationSchema={SignUpSchema}
            onSubmit={values => {
              onSignUpBtnPress(values);
            }}>
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              setFieldValue,
              setFieldTouched,
            }) => (
              <>
                <TextInputWithIcon
                  name={'First Name'}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />
                {touched.name && errors.name && (
                  <Text style={styles.ErrorMsgStyle}>{errors.name}</Text>
                )}
                <TextInputWithIcon
                  name={'Last Name'}
                  value={values.lastname}
                  onChangeText={handleChange('lastname')}
                  onBlur={() => setFieldTouched('lastname')}
                />
                {touched.lastname && errors.lastname && (
                  <Text style={styles.ErrorMsgStyle}>{errors.lastname}</Text>
                )}
                <TextInputWithIcon
                  name={'Email'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.ErrorMsgStyle}>{errors.email}</Text>
                )}
                <TextInputWithIcon
                  name={'Phone Number'}
                  value={values.phonenumber}
                  onChangeText={handleChange('phonenumber')}
                  onBlur={() => setFieldTouched('phonenumber')}
                />
                {touched.phonenumber && errors.phonenumber && (
                  <Text style={styles.ErrorMsgStyle}>{errors.phonenumber}</Text>
                )}
                <TextInputWithIcon
                  name={'Password'}
                  iconSvg={<EyePassword />}
                  secureTextEntry={true}
                  marginTop={hp('3%')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.ErrorMsgStyle}>{errors.password}</Text>
                )}
                <TextInputWithIcon
                  name={'Confirm Password'}
                  iconSvg={<EyePassword />}
                  secureTextEntry={true}
                  marginTop={hp('3%')}
                  value={values.confirmpassword}
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={() => setFieldTouched('confirmpassword')}
                />
                {touched.confirmpassword && errors.confirmpassword && (
                  <Text style={styles.ErrorMsgStyle}>
                    {errors.confirmpassword}
                  </Text>
                )}
                <TextInputWithIcon
                  name={'Lawyer ID'}
                  marginTop={hp('3%')}
                  value={values.lawyerID}
                  onChangeText={handleChange('lawyerID')}
                  onBlur={() => setFieldTouched('lawyerID')}
                />
                {touched.lawyerID && errors.lawyerID && (
                  <Text style={styles.ErrorMsgStyle}>{errors.lawyerID}</Text>
                )}
                <TouchableOpacity
                  style={styles.DropdownTextHead}
                  onPress={() => {
                    setLawyerArea(!lawyerArea);
                  }}>
                  <Text13 textStyle={styles.SearchCategoryTxt}>
                    {values?.user_type}
                  </Text13>
                  <DropdownBottomIcon />
                </TouchableOpacity>
                {lawyerArea ? (
                  <View style={styles.DropdownArea}>
                    <FlatList
                      data={Data}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity
                            style={styles.LocationItem}
                            onPress={() => {
                              setFieldValue('user_type', item.value);
                              setLawyerArea(false);
                            }}>
                            <Text13 textStyle={styles.DropdownText}>
                              {item.value}
                            </Text13>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                ) : null}
                <ButtonComp
                  onPress={handleSubmit}
                  btnStyle={styles.btnStyle}
                  txtStyle={styles.txtStyle}
                  text={'Continue'}
                  loading={isLoading}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
