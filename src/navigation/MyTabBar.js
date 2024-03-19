import React, {useState} from 'react';
import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import HomeIcon from '../assets/svgs/HomeIcon';
import JobIcon from '../assets/svgs/JobIcon';
import AddIcon from '../assets/svgs/AddIcon';
import ChatIcon from '../assets/svgs/ChatIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';
import {Paths} from '../assets/images/imagesPath/Path';
import {COLORS} from '../shared/theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MyTabBar = props => {
  const [selectedTab, setSelectedTab] = useState('HomeScreenStack');

  const imgData = [
    {
      name: 'HomeScreenStack',
      img: (
        <HomeIcon
          color={
            selectedTab === 'HomeScreenStack'
              ? COLORS.primary
              : COLORS.lightBlue02
          }
        />
      ),
    },
    {
      name: 'JobScreenStack',
      img: (
        <JobIcon
          color={
            selectedTab === 'JobScreenStack'
              ? COLORS.primary
              : COLORS.lightBlue02
          }
        />
      ),
    },
    {name: 'AdditionScreenStack', img: <AddIcon />},
    {
      name: 'ChatScreenStack',
      img: (
        <ChatIcon
          color={
            selectedTab === 'ChatScreenStack'
              ? COLORS.primary
              : COLORS.lightBlue02
          }
        />
      ),
    },
    {
      name: 'ProfileScreenStack',
      img: (
        <ProfileIcon
          color={
            selectedTab === 'ProfileScreenStack'
              ? COLORS.primary
              : COLORS.lightBlue02
          }
        />
      ),
    },
  ];

  const handleTabPress = name => {
    setSelectedTab(name);
    props.navigation.navigate(name);
  };

  return (
    <ImageBackground
      style={{
        elevation: 1,
        shadowOpacity: 0.1,
        position: 'absolute',
        // backgroundColor:'red',
        bottom: 0,
        width: screenWidth,
        height: screenHeight * 0.128,
        marginBottom: scale(-11),
        alignItems: 'center',
        flexDirection: 'row', // Align icons horizontally
        justifyContent: 'space-around', // Equal spacing between icons
      }}
      resizeMode="cover"
      source={Paths.curve}>
      {imgData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: screenWidth / 5,
            height: screenHeight / 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => handleTabPress(item.name)}>
          {item.img}
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

export default MyTabBar;
