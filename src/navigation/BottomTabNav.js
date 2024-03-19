import React, { useEffect, useLayoutEffect, useState } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Home from '../screens/homePage/Home';
import Job from '../screens/jobPage/Job';
import Addition from '../screens/addPage/Addition';
import Chat from '../screens/chatPage/Chat';
import Profile from '../screens/userProfile.js/Profile';
import {COLORS} from '../shared/theme';
import JobDetail from '../screens/jobDetail/JobDetail';
import MyTabBar from './MyTabBar';
import MyJob from '../screens/myJob/MyJob';
import { Keyboard } from 'react-native';
const bottomTab = createBottomTabNavigator();
const homeStack = createNativeStackNavigator();
function HomeScreenStack() {
  return (
    <homeStack.Navigator screenOptions={{headerShown: false}}>
      <homeStack.Screen name="Home" component={Home} />
    </homeStack.Navigator>
  );
}
const jobStack = createNativeStackNavigator();
function JobScreenStack() {
  return (
    <jobStack.Navigator screenOptions={{headerShown: false}}>
      <jobStack.Screen name="Job" component={Job} />
      <homeStack.Screen name="JobDetail" component={JobDetail} />
      <homeStack.Screen name="MyJob" component={MyJob} />
    </jobStack.Navigator>
  );
}
const additionStack = createNativeStackNavigator();
function AdditionScreenStack() {
  return (
    <additionStack.Navigator screenOptions={{headerShown: false}}>
      <additionStack.Screen name="Addition" component={Addition} />
    </additionStack.Navigator>
  );
}
const chatStack = createNativeStackNavigator();
function ChatScreenStack() {
  return (
    <chatStack.Navigator screenOptions={{headerShown: false}}>
      <chatStack.Screen name="Chat" component={Chat} />
    </chatStack.Navigator>
  );
}
const profileStack = createNativeStackNavigator();
function ProfileScreenStack() {
  return (
    <profileStack.Navigator screenOptions={{headerShown: false}}>
      <profileStack.Screen name="Profile" component={Profile} />
    </profileStack.Navigator>
  );
}
const BottomTabNav = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
useLayoutEffect(()=>{
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
      setKeyboardVisible(true); 
    }
  );
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setKeyboardVisible(false);
    }
  );

  return () => {
    keyboardDidHideListener.remove();
    keyboardDidShowListener.remove();
  };
}, []);

  return (
    <bottomTab.Navigator
      backBehavior="firstRoute"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: COLORS.white,
          height: hp('10%'),
        },
      })}
      tabBar={props => isKeyboardVisible  ? null: <MyTabBar {...props} />}>
      <bottomTab.Screen name="HomeScreenStack" component={HomeScreenStack} />
      <bottomTab.Screen
        name="JobScreenStack"
        component={JobScreenStack}
        listeners={({navigation}) => ({
          focus: () =>
            navigation.navigate('JobScreenStack', {
              screen: 'Job',
            }),
        })}
      />
      <bottomTab.Screen
        name="AdditionScreenStack"
        component={AdditionScreenStack}
        options={{unmountOnBlur: true,tabBarHideOnKeyboard:true}}
        // listeners={({ navigation }) => ({
        //   blur: () => navigation.setParams({ screen: undefined }),
        // })}
      />
      <bottomTab.Screen name="ChatScreenStack" component={ChatScreenStack} />
      <bottomTab.Screen
        name="ProfileScreenStack"
        component={ProfileScreenStack}
      />
    </bottomTab.Navigator>
  );
};
export default BottomTabNav;
