import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import {styles} from './Styles';
import MainHeader from '../../../components/mainScreensHeader/MainHeader';
import Back from '../../../assets/svgs/Back';
import {Text12, Text14, Text16, Text20} from '../../../components/Text/Text';
import UploadIconCircle from '../../../assets/svgs/UploadIconCircle';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import AddCircle from '../../../assets/svgs/AddCircle';
import MailIcon from '../../../assets/svgs/MailIcon';
import ButtonComp from '../../../components/Button/ButtonComp';
import {navigate} from '../../../navigation/rootNavigation';
import ChevronDown from '../../../assets/svgs/ChevronDown';
import {Paths} from '../../../assets/images/imagesPath/Path';
import ImageCropPicker from 'react-native-image-crop-picker';


const UploadProfileSchema = Yup.object({
  lawyerID: Yup.string()
    .matches(/^\d{6}$/, 'Lawyer ID must be 6 digits')
    .required('Lawyer ID is required'),
  lawyerName: Yup.string()
    .min(3, 'Too Short')
    .max(15, 'Must be 15 characters or less')
    .matches(/^[A-Za-z]+$/, 'Lawyer Name must contain only letters')
    .required('Lawyer Name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, 'Invalid phone number format (11 digits only)')
    .required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  webPageLink: Yup.string()
    .matches(
      /^(https?:\/\/)?([\w-]+\.)*[\w-]+(\.[a-z]{2,})(\/\S*)?$/i,
      'Invalid webpage link',
    )
    .required('Webpage Link is required'),
  country: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Invalid country name')
    .required('Country is required'),
  city: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Invalid city name')
    .required('City is required'),
  branch: Yup.string()
    .matches(/^[a-zA-Z0-9\s_-]+$/, 'Invalid branch name')
    .required('Branch name is required'),
  building: Yup.string()
    .matches(/^[a-zA-Z0-9\s_-]+$/, 'Invalid building name')
    .required('Building name is required'),
});
const UploadProfile = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const[selectedImage,setSelectedImage]=useState({
    name:"",
    type: "",
    uri:""
  });

  const UploadImage=()=>{
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(el => {
      let obj = {
        name: el.path.split('/')[el.path.split('/').length - 1],
        type: el.mime,
        uri: el.path,
      };
      setSelectedImage(obj);
    }).catch(err=> console.log(err));
  }
  return (
    <View style={styles.container}>
      <MainHeader text={'Profile'} back={<Back />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            lawyerID: '',
            lawyerName: '',
            phoneNumber: '',
            email: '',
            webPageLink: '',
            country: '',
            city: '',
            branch: '',
            building: '',
          }}
          validationSchema={UploadProfileSchema}
          onSubmit={() => {
            navigate('CategoryProfile');
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
              <View style={styles.mainHead}>
                <Text20 textStyle={styles.txtCreateProfile}>
                  Create Profile
                </Text20>
                <View style={styles.headImage}>
                <TouchableOpacity style={styles.positionImage} onPress={UploadImage}>
                    <Image
                      style={styles.styleImage}
                      source={selectedImage && selectedImage.uri?{uri:selectedImage?.uri} : Paths.UploadImageIcon}
                    />
                    <View style={styles.headUploadIcon}>
                      <UploadIconCircle />
                    </View>
                  </TouchableOpacity>
                  <Text16 textStyle={styles.txtUploadProfile}>
                    Upload Profile Picture
                  </Text16>
                </View>
                <Text14 textStyle={styles.textInputTitle}>Lawyer ID</Text14>
                <TextInputWithIcon
                  marginTop={8}
                  name={'Enter Lawyer ID'}
                  value={values.lawyerID}
                  onChangeText={handleChange('lawyerID')}
                  onBlur={() => setFieldTouched('lawyerID')}
                />
                {touched.lawyerID && errors.lawyerID && (
                  <Text style={styles.ErrorMsgStyle}>{errors.lawyerID}</Text>
                )}

                <Text14 textStyle={styles.textInputTitle}>Lawyer Name</Text14>
                <TextInputWithIcon
                  marginTop={8}
                  name={'Enter Lawyer Name'}
                  value={values.lawyerName}
                  onChangeText={handleChange('lawyerName')}
                  onBlur={() => setFieldTouched('lawyerName')}
                />
                {touched.lawyerName && errors.lawyerName && (
                  <Text style={styles.ErrorMsgStyle}>{errors.lawyerName}</Text>
                )}

                <Text14 textStyle={styles.textInputTitle}>Phone Number</Text14>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={values.phoneNumber}
                  defaultCode="US"
                  layout="first"
                  // onChangeText={text => {
                  //   setValue(text);
                  //   console.log(text);
                  // }}
                  onChangeText={handleChange('phoneNumber')}
                  onChangeFormattedText={text => {
                    setFormattedValue(text);
                  }}
                  renderDropdownImage={<ChevronDown />}
                  placeholder="Enter Phone Number"
                  containerStyle={styles.packageTextInputContainerStyle}
                  textInputStyle={styles.packageTextInputStyle}
                  textContainerStyle={styles.packageTextContainerStyle}
                  codeTextStyle={{display: 'none'}}
                />
                <View style={styles.headAddCircle}>
                  <TouchableOpacity>
                    <AddCircle />
                  </TouchableOpacity>
                  <Text12 textStyle={styles.txtAddPhone}>
                    Add Phone Number
                  </Text12>
                </View>
                {touched.phoneNumber && errors.phoneNumber && (
                  <Text style={styles.ErrorMsgStyle}>{errors.phoneNumber}</Text>
                )}
                <Text14 textStyle={styles.textInputTitle}>Email</Text14>
                <View>
                  <TextInput
                    style={styles.customTextInput}
                    placeholder="Enter Email Address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.ErrorMsgStyle}>{errors.email}</Text>
                  )}

                  <View style={styles.headMailIcon}>
                    <MailIcon />
                  </View>
                </View>
                <Text14 textStyle={styles.textInputTitle}>WebPage Link</Text14>
                <TextInputWithIcon
                  marginTop={8}
                  name={'Enter Webpage Link'}
                  value={values.webPageLink}
                  onChangeText={handleChange('webPageLink')}
                  onBlur={() => setFieldTouched('webPageLink')}
                />
                {touched.webPageLink && errors.webPageLink && (
                  <Text style={styles.ErrorMsgStyle}>{errors.webPageLink}</Text>
                )}

                <Text14 textStyle={styles.textInputTitle}>Country</Text14>
                <TextInputWithIcon
                  marginTop={8}
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
                  marginTop={8}
                  name={'Enter City'}
                  value={values.city}
                  onChangeText={handleChange('city')}
                  onBlur={() => setFieldTouched('city')}
                />
                {touched.city && errors.city && (
                  <Text style={styles.ErrorMsgStyle}>{errors.city}</Text>
                )}
                <Text14 textStyle={styles.textInputTitle}>Branch</Text14>
                <TextInputWithIcon
                  marginTop={8}
                  name={'Enter Branch'}
                  value={values.branch}
                  onChangeText={handleChange('branch')}
                  onBlur={() => setFieldTouched('branch')}
                />
                {touched.branch && errors.branch && (
                  <Text style={styles.ErrorMsgStyle}>{errors.branch}</Text>
                )}
                <Text14 textStyle={styles.textInputTitle}>Building</Text14>
                <TextInputWithIcon
                  marginTop={8}
                  name={'Enter Building'}
                  value={values.building}
                  onChangeText={handleChange('building')}
                  onBlur={() => setFieldTouched('building')}
                />
                {touched.building && errors.building && (
                  <Text style={styles.ErrorMsgStyle}>{errors.building}</Text>
                )}
                <ButtonComp
                  onPress={handleSubmit}
                  text={'Next'}
                  btnStyle={styles.ButtonComp}
                  txtStyle={styles.TxtBtnComp}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default UploadProfile;
