import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import {NavigationContainer, useNavigationState} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';
import Forget from '../screens/auth/forgetPassword/Forget';
import Verification from '../screens/auth/verificationCode/Verification';
import SignUp from '../screens/auth/signUp/SignUp';
import Login from '../screens/auth/login/Login';
import PackagesPlan from '../screens/auth/packagesPlan/PackagesPlan';
import PaymentCardDetail from '../screens/auth/paymentCardDetail/PaymentCardDetail';
import UploadProfile from '../screens/profileScreens/uploadProfile/UploadProfile';
import CategoryProfile from '../screens/profileScreens/categoryProfile/CategoryProfile';
import AddressProfile from '../screens/profileScreens/addressProfile/AddressProfile';
import DetailProfile from '../screens/profileScreens/detailProfile/DetailProfile';
import LawyerProfile from '../screens/lawyerProfile/LawyerProfile';
import PrivacyPolicy from '../screens/privacyPolicy/PrivacyPolicy';
import TermsAndCondition from '../screens/termsAndCondition/TermsAndCondition';
import Disclaimer from '../screens/disclaimer/Disclaimer';
import About from '../screens/about/About';
import DrawerNav from './drawerNav/DrawerNav';
import BottomTabNav from './BottomTabNav';
import { useSelector } from 'react-redux';
import { getItemFromAsyncStorage } from '../utils/storage/asyncStorage';
import { object } from 'yup';

const authStack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <authStack.Navigator screenOptions={{headerShown: false}}>
      <rootStack.Screen name="Login" component={Login} />
      <rootStack.Screen name="SignUp" component={SignUp} />
      <rootStack.Screen name="Forget" component={Forget} />
      <rootStack.Screen name="VerificationCode" component={Verification} />
      <rootStack.Screen name="PackagesPlan" component={PackagesPlan} />
    </authStack.Navigator>
  );
};

const rootStack = createNativeStackNavigator();
const RootStack = () => {
  // const navigationState = useNavigationState(state => state);
  return (
    <rootStack.Navigator screenOptions={{headerShown: false}}>
      <rootStack.Screen name="DrawerNav" component={DrawerNav} />
      <rootStack.Screen name="BottomTabNav" component={BottomTabNav} />
      <rootStack.Screen name="UploadProfile" component={UploadProfile} />
      <rootStack.Screen name="About" component={About} />
      <rootStack.Screen name="Disclaimer" component={Disclaimer} />
      <rootStack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
      <rootStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <rootStack.Screen name="LawyerProfile" component={LawyerProfile} />
      <rootStack.Screen name="DetailProfile" component={DetailProfile} />
      <rootStack.Screen name="CategoryProfile" component={CategoryProfile} />
      <rootStack.Screen name="AddressProfile" component={AddressProfile} />
      
      <rootStack.Screen
        name="PaymentCardDetail"
        component={PaymentCardDetail}
      />
    </rootStack.Navigator>
  );
};
function Route() {
  const [isUserLogIn, setIsUserLogIn] = useState(true);
  const data = useSelector(store => store?.user?.isUserLoggedIn);
  const checkUserStatus = async () => {
    const token = await getItemFromAsyncStorage(
      'Token',
    );
    if (token) {
      setIsUserLogIn(true);
    } else {
      setIsUserLogIn(false);
    }
  };
  useEffect(() => {
    checkUserStatus()
  }, [data]);
  
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
      {isUserLogIn ? <RootStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
}
export default Route;
