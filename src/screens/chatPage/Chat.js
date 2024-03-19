import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {DataItems} from './ChatData';
import {Text12, Text16} from '../../components/Text/Text';
import ChatBtn from '../../assets/svgs/ChatBtn';
import { navigate } from '../../navigation/rootNavigation';

export const ChatInformation = ({image, name, about, time}) => {
  return (
    <View style={styles.headFlatlist}>
      <TouchableOpacity onPress={()=>{
        navigate('ChatNow');
      }}>
      <View style={styles.horizontalView}>
        <View style={styles.horizontalView}>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.leftView}>
            <Text16 textStyle={styles.nameTxt}>{name}</Text16>
            <Text12 textStyle={styles.aboutTxt}>{about}</Text12>
          </View>
        </View>
        <Text12 textStyle={styles.timeTxt}>{time} ago</Text12>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const Chat = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Chat'} back={<Back />} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListStyle}
        data={DataItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ChatInformation
            image={item.image}
            name={item.name}
            about={item.about}
            time={item.time}
          />
        )}
      />
      <TouchableOpacity style={styles.chatBtnStyle}>
        <ChatBtn />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;
