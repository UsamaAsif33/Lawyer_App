import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {Text12, Text14, Text16} from '../../components/Text/Text';
import {DataItems} from './NotificationData';
import HorizontalView from '../../components/horizontalView/HorizontalView';

export const NotificationInformation = ({image, name, about, time}) => {
  return (
    <View style={styles.headFlatlist}>
      <View style={styles.horizontalView}>
        <HorizontalView>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.leftView}>
            <Text14 textStyle={styles.nameTxt}>{name}</Text14>
            <Text12 textStyle={styles.aboutTxt}>{about}</Text12>
          </View>
        </HorizontalView>
        <Text12 textStyle={styles.timeTxt}>{time} ago</Text12>
      </View>
    </View>
  );
};
const Notification = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Notifications'} back={<Back />} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        data={DataItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <NotificationInformation
            image={item.image}
            name={item.name}
            about={item.about}
            time={item.time}
          />
        )}
      />
    </View>
  );
};
export default Notification;
