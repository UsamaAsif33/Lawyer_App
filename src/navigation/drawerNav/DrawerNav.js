import {View, SafeAreaView, Image, TouchableOpacity, Modal} from 'react-native';
import {
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import HomeIcon from '../../assets/svgs/HomeIcon';
import {COLORS} from '../../shared/theme';
import JobIcon from '../../assets/svgs/JobIcon';
import ProfileIcon from '../../assets/svgs/ProfileIcon';
import AboutIcon from '../../assets/svgs/AboutIcon';
import PrivacyIcon from '../../assets/svgs/PrivacyIcon';
import TermsIcon from '../../assets/svgs/TermsIcon';
import DisclaimerIcon from '../../assets/svgs/DisclaimerIcon';
import LogOutIcon from '../../assets/svgs/LogOutIcon';
import BottomTabNav from '../BottomTabNav';
import About from '../../screens/about/About';
import TermsAndCondition from '../../screens/termsAndCondition/TermsAndCondition';
import {Paths} from '../../assets/images/imagesPath/Path';
import {Text14, Text24} from '../../components/Text/Text';
import Cross from '../../assets/svgs/Cross';
import Disclaimer from '../../screens/disclaimer/Disclaimer';
import ButtonComp from '../../components/Button/ButtonComp';
import {styles} from './Styles';
import UploadProfile from '../../screens/profileScreens/uploadProfile/UploadProfile';
import PrivacyPolicy from '../../screens/privacyPolicy/PrivacyPolicy';
import ChatNow from '../../screens/chatNow.js/ChatNow';
import Notification from '../../screens/notification/Notification';
import { removeItemFromAsyncStorage} from '../../utils/storage/asyncStorage';
import { setUserState } from '../../redux/userSlice';
import { setUserStatus } from '../../redux/authentication/AuthReducer';

const DrawerNav = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch()
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();
  
  const onLogOutBtnAction = async()=>{
  await removeItemFromAsyncStorage('Token')
  dispatch(setUserState(null))
  dispatch(setUserStatus(null))
  }
  return (
    <View style={styles.containerFlex}>
      <Drawer.Navigator
        drawerContent={props => {
          return (
            <SafeAreaView style={styles.containerFlex}>
              <View style={styles.headDrawer}>
                <View style={styles.alignItems}>
                  <Image source={Paths.imageHead} />
                  <Text24 textStyle={styles.txtIstinsbe}>Istinsbe</Text24>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.dispatch(DrawerActions.closeDrawer());
                  }}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.headDrawerItems}>
                <DrawerItemList {...props} />
                <DrawerItem
                  style={styles.headLogOut}
                  labelStyle={styles.txtLogOut}
                  label="Log Out"
                  onPress={() => setDisplay(true)}
                  icon={() => (
                    <LogOutIcon
                      stroke={COLORS.darkBlue}
                      width={16}
                      height={16}
                    />
                  )}
                />
              </View>
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            width: wp('78%'),
          },
          drawerLabelStyle: {
            fontWeight: '400',
            fontSize: 16,
            marginLeft: wp('-4%'),
            color: COLORS.LighterBlack,
          },
          drawerPosition: 'right',
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Home"
          component={BottomTabNav}
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({focused}) => (
              <HomeIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Jobs"
          component={BottomTabNav}
          initialParams={{screen: 'JobScreenStack'}}
          options={{
            drawerLabel: 'Jobs',
            title: 'Jobs',
            drawerIcon: ({focused}) => (
              <JobIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={22}
                height={22}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="My Jobs"
          component={BottomTabNav}
          initialParams={{screen: 'JobScreenStack'}}
          listeners={({navigation}) => ({
            focus: () =>
              navigation.navigate('My Jobs', {
                screen: 'JobScreenStack',
                params: {
                  screen: 'MyJob',
                },
              }),
          })}
          options={{
            drawerLabel: 'My Jobs',
            title: 'My Jobs',
            drawerIcon: ({focused}) => (
              <JobIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={22}
                height={22}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={UploadProfile}
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
            drawerIcon: ({focused}) => (
              <ProfileIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={22}
                height={22}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({focused}) => (
              <AboutIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={19}
                height={19}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Privacy Policy"
          component={PrivacyPolicy}
          options={{
            drawerLabel: 'Privacy Policy',
            title: 'Privacy Policy',
            drawerIcon: ({focused}) => (
              <PrivacyIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={22}
                height={22}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Terms and Conditions"
          component={TermsAndCondition}
          options={{
            drawerLabel: 'Terms and Conditions',
            title: 'Terms and Conditions',
            drawerIcon: ({focused}) => (
              <TermsIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={20}
                height={20}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Disclaimer"
          component={Disclaimer}
          options={{
            drawerLabel: 'Disclaimer',
            title: 'Disclaimer',
            drawerIcon: ({focused}) => (
              <DisclaimerIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={20}
                height={21}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ChatNow"
          component={ChatNow}
          options={{
            drawerItemStyle: {display: 'none'},
            drawerLabel: 'ChatNow',
            title: 'ChatNow',
            drawerIcon: ({focused}) => (
              <DisclaimerIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={20}
                height={21}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Notify"
          component={Notification}
          options={{
            drawerItemStyle: {display: 'none'},
            drawerLabel: 'Notification',
            title: 'Notification',
            drawerIcon: ({focused}) => (
              <DisclaimerIcon
                color={focused ? COLORS.primary : COLORS.LighterBlack}
                width={20}
                height={21}
              />
            ),
          }}
        />
      </Drawer.Navigator>
      <Modal transparent={true} visible={display}>
        <View style={styles.modalHead}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.headCross}
              onPress={() => {
                setDisplay(false);
              }}>
              <Cross />
            </TouchableOpacity>
            <View style={styles.headCenter}>
              <LogOutIcon />
              <Text24 textStyle={styles.txtSure}>Are you sure?</Text24>
              <Text14 textStyle={styles.txtLogout}>
                Do you want to Logout?
              </Text14>
              <ButtonComp
                text={'Continue'}
                btnStyle={styles.ModalHeadDone}
                txtStyle={styles.ModalTxtDone}
                onPress={onLogOutBtnAction}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DrawerNav;
