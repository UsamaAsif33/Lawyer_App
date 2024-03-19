import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Bell from '../../assets/svgs/Bell';
import HamBurgerIcon from '../../assets/svgs/HamBurgerIcon';
import HorizontalView from '../horizontalView/HorizontalView';
import {styles} from './Styles';
import {Text20} from '../Text/Text';
import {navigate} from '../../navigation/rootNavigation';
const MainHeader = ({content, type, text, back}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isOnNotificationScreen, setIsOnNotificationScreen] = useState(false);
  const onPress = () => {
    navigation.toggleDrawer();
  };
  useEffect(() => {
    if (route.name == 'Notify') {
      setIsOnNotificationScreen(true);
    } else {
      setIsOnNotificationScreen(false);
    }
  }, [navigation]);
  return (
    <View style={styles.container}>
      <HorizontalView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          {back}
        </TouchableOpacity>
        {type && type == 'image' ? (
          <Image source={content} />
        ) : (
          <Text20 textStyle={styles.txtText}> {text} </Text20>
        )}
        <View style={styles.headComponent}>
          <TouchableOpacity
            onPress={() => {
              navigate('Notify');
            }}>
            <Bell display={isOnNotificationScreen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <HamBurgerIcon />
          </TouchableOpacity>
        </View>
      </HorizontalView>
    </View>
  );
};
export default MainHeader;
