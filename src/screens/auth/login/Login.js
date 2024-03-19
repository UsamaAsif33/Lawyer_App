import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

import {Formik} from 'formik';
import * as Yup from 'yup';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import ButtonComp from '../../../components/Button/ButtonComp';
import LineView from '../../../components/lineComponent/LineView';
import GmailIcon from '../../../assets/svgs/GmailIcon';
import FaceBookIcon from '../../../assets/svgs/FaceBookIcon';
import {COLORS} from '../../../shared/theme';
import EyePassword from '../../../assets/svgs/EyePassword';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import {styles} from './Styles';
import HorizontalView from '../../../components/horizontalView/HorizontalView';
import {Text12} from '../../../components/Text/Text';
import {navigate} from '../../../navigation/rootNavigation';
import {loginUserPostReq} from '../../../redux/authentication/AuthActions';
import {
  LoginSchema,
  loginInitialValues,
} from '../../../utils/FormikData/formikData';
import { saveItemInAsyncStorage } from '../../../utils/storage/asyncStorage';
import { setUserState } from '../../../redux/userSlice';

const Login = () => {
  // HOOKS
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const responseLogin = useSelector(state => state?.auth);
  const isLoading = responseLogin?.status == 'loading' ? true : false;

  //  FUNCTIONS
  const onLoginBtnPress = async(values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      dispatch(loginUserPostReq(payload));
  };

  const onSuccessfulLogIn = async() => {
    await saveItemInAsyncStorage('Token',responseLogin?.userData?.token );
    dispatch(setUserState(true));
    
  }

  useEffect(() => {
    if(responseLogin?.status === 'fullfill')
    {onSuccessfulLogIn()} 
  },[responseLogin?.status]);

  // <......................................>

  // GOOGLE SIGN IN
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const googleSignInHandle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('user info is', userInfo);
    } catch (error) {
      console.log('...', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('some other error happened');
      }
    }
  };
  //<......................................>

  // FACEBOOK LOGIN
  const fblogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('Fb Result: ', result);
        if (result.declinedPermissions) {
          resCallback({message: 'Email is Required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoReq = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoReq).start();
        }
      },
      function (error) {
        console.log('Login Failed with error: ', error);
      },
    );
  };
  const onFbLogin = async () => {
    try {
      await fblogin(responseInfoCallback);
    } catch (error) {
      console.log('Error Raised: ', error);
    }
  };
  const responseInfoCallback = async (error, result) => {
    if (error) {
      console.log('Error Top: ', error);
      return;
    } else {
      const userData = result;
      console.log('FB Data: ', userData);
    }
  };
  //<......................................>
  return (
    <View style={styles.container}>
      <ScrollView>
        <AuthHeader />
        <View style={styles.headcomponent}>
          <Text style={styles.txtLogin}>Login</Text>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={LoginSchema}
            onSubmit={values => {
              onLoginBtnPress(values);
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
                  name={'Email'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.ErrorMsgStyle}>{errors.email}</Text>
                )}
                <TextInputWithIcon
                  name={'Password'}
                  iconSvg={<EyePassword />}
                  secureTextEntry={true}
                  marginTop={hp('2%')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.ErrorMsgStyle}>{errors.password}</Text>
                )}
                <HorizontalView marginTop={hp('2.7%')}>
                  <View style={styles.headCheckBox}>
                    <CheckBox
                      disabled={false}
                      tintColors={{
                        true: COLORS.primary,
                        false: COLORS.secondary,
                      }}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                    />
                    <Text12 textStyle={{fontWeight: 700}}>
                      Remember password
                    </Text12>
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Forget')}>
                    <Text style={styles.txtForgetPassword}>
                      Forget Password?
                    </Text>
                  </TouchableOpacity>
                </HorizontalView>
                <View style={styles.headBtnComp}>
                  <ButtonComp
                    onPress={handleSubmit}
                    text={'Login'}
                    btnStyle={styles.ButtonComp}
                    txtStyle={styles.TxtBtnComp}
                    loading={isLoading}
                  />
                  <View style={styles.headBtnComp}>
                    <ButtonComp
                      onPress={() => {
                        navigate('SignUp');
                      }}
                      text={'Sign Up'}
                      btnStyle={styles.ButtonComp}
                      txtStyle={styles.TxtBtnComp}
                    />
                  </View>
                </View>
                <View style={styles.headLineComp}>
                  <LineView style={styles.linecomp} />
                  <Text style={styles.txtContinueWith}>Or continue with</Text>
                  <LineView style={styles.linecomp} />
                </View>
                <View style={styles.headBtnComp}>
                  <ButtonComp
                    onPress={googleSignInHandle}
                    text={'Continue with Google'}
                    icon={<GmailIcon />}
                    btnStyle={styles.ButtonCompWithIcon}
                    txtStyle={styles.TxtButtonCompWithIcon}
                  />
                </View>
                <View style={styles.headBtnComp}>
                  <ButtonComp
                    onPress={onFbLogin}
                    text={'Continue with Facebook'}
                    icon={<FaceBookIcon />}
                    btnStyle={styles.ButtonCompWithIcon}
                    txtStyle={styles.TxtButtonCompWithIcon}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
