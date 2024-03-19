import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MainHeader from '../../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../../assets/svgs/Back';
import {Text14, Text20} from '../../../components/Text/Text';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import ButtonComp from '../../../components/Button/ButtonComp';
import {navigate} from '../../../navigation/rootNavigation';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const AddressProfileSchema = Yup.object({
  country: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Invalid country name')
    .required('Country is required'),
  city: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Invalid city name')
    .required('City is required'),
  areaName: Yup.string().required('Area Name is required'),
  branch: Yup.string()
    .matches(/^[a-zA-Z0-9\s_-]+$/, 'Invalid branch name')
    .required('Branch is required'),
  building: Yup.string()
    .matches(/^[a-zA-Z0-9\s_-]+$/, 'Invalid building name')
    .required('Building is required'),
  role: Yup.string().required('Role is required'),
});

const AddressProfile = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Profile'} back={<Back />} />
      <View style={styles.mainHead}>
        <ScrollView
          style={{maxHeight: heightPercentageToDP('85%')}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 2}}>
          <KeyboardAvoidingView behavior="position">
            <Formik
              initialValues={{
                areaName: '',
                role: '',
                country: '',
                city: '',
                branch: '',
                building: '',
              }}
              validationSchema={AddressProfileSchema}
              onSubmit={() => {
                navigate('DetailProfile');
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
                  <Text20 textStyle={styles.txtCreateProfile}>
                    Create Profile
                  </Text20>
                  <Text14 textStyle={styles.textInputTitle}>Country</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter Country'}
                    value={values.country}
                    onChangeText={handleChange('country')}
                    onBlur={() => setFieldTouched('country')}
                  />
                  {touched.country && errors.country && (
                    <Text style={styles.ErrorMsgStyle}>{errors.country}</Text>
                  )}
                  <Text14 textStyle={styles.textInputTitle}>City</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter City'}
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={() => setFieldTouched('city')}
                  />
                  {touched.city && errors.city && (
                    <Text style={styles.ErrorMsgStyle}>{errors.city}</Text>
                  )}

                  <Text14 textStyle={styles.textInputTitle}>Area Name</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter Area'}
                    value={values.areaName}
                    onChangeText={handleChange('areaName')}
                    onBlur={() => setFieldTouched('areaName')}
                  />
                  {touched.areaName && errors.areaName && (
                    <Text style={styles.ErrorMsgStyle}>{errors.areaName}</Text>
                  )}
                  <Text14 textStyle={styles.textInputTitle}>Building</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter Building'}
                    value={values.building}
                    onChangeText={handleChange('building')}
                    onBlur={() => setFieldTouched('building')}
                  />
                  {touched.building && errors.building && (
                    <Text style={styles.ErrorMsgStyle}>{errors.building}</Text>
                  )}
                  <Text14 textStyle={styles.textInputTitle}>Branch</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter Branch'}
                    value={values.branch}
                    onChangeText={handleChange('branch')}
                    onBlur={() => setFieldTouched('branch')}
                  />
                  {touched.branch && errors.branch && (
                    <Text style={styles.ErrorMsgStyle}>{errors.branch}</Text>
                  )}
                  <Text14 textStyle={styles.textInputTitle}>Role</Text14>
                  <TextInputWithIcon
                    marginTop={6}
                    name={'Enter Role'}
                    value={values.role}
                    onChangeText={handleChange('role')}
                    onBlur={() => setFieldTouched('role')}
                  />
                  {touched.role && errors.role && (
                    <Text style={styles.ErrorMsgStyle}>{errors.role}</Text>
                  )}
                  <ButtonComp
                    onPress={handleSubmit}
                    text={'Save'}
                    btnStyle={styles.ButtonComp}
                    txtStyle={styles.TxtBtnComp}
                  />
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddressProfile;
