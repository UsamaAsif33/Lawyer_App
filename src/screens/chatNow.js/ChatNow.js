import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {styles} from './Styles';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import ChatBtn from '../../assets/svgs/ChatBtn';
import ChatBtnVector from '../../assets/svgs/ChatBtnVector';
import AttachFileIcon from '../../assets/svgs/AttachFileIcon';

const ChatNow = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <MainHeader text={'Mike Smith'} back={<Back />} />
      <ScrollView >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.headFlatList}
          inverted={true}
          data={data}
          renderItem={({item}) => {
            return <Text style={styles.flatListText}>{item}</Text>;
          }}
        />
      </ScrollView>
      <HorizontalView
        width={widthPercentageToDP('80')}
        style={styles.horizontalView}>
        <TextInput
          value={input}
          onChangeText={txt => {
            setInput(txt);
          }}
          style={styles.headTextInput}
          placeholder="Type something"
        />
        <View style={styles.touchableHead}>
          <TouchableOpacity
            disabled={input.trim() == '' ? true : false}
            style={{right: 3}}
            onPress={() => {
              setData([input, ...data]);
              setInput('');
            }}>
            <ChatBtnVector />
          </TouchableOpacity>
          <TouchableOpacity>
            <AttachFileIcon />
          </TouchableOpacity>
        </View>
      </HorizontalView>
    </View>
  );
};
export default ChatNow;
