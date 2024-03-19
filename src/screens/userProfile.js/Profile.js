import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {Text12, Text14, Text20} from '../../components/Text/Text';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import ButtonComp from '../../components/Button/ButtonComp';
import {navigate} from '../../navigation/rootNavigation';
import {LawyersData} from '../../assets/dummyData/DummyData';
import {useFocusEffect} from '@react-navigation/native';
import {Paths} from '../../assets/images/imagesPath/Path';
import {getLawyerReq} from '../../redux/lawyer/LawyerActions';
import { COLORS } from '../../shared/theme';

export const LawyerInformation = ({
  image,
  name,
  gmail,
  price,
  percentage,
  buttonText,
  moreButton,
  specification,
}) => {
  return (
    <View style={styles.headFlatlist}>
      <HorizontalView>
        <Image source={image} />
        <View>
          <Text20
            numberOfLines={1}
            ellipsizeMode="tail"
            textStyle={styles.txtName}>
            {name}
          </Text20>
          <Text14 textStyle={styles.txtGmail}
          numberOfLines={1}
          ellipsizeMode="tail"
          
          >{gmail}</Text14>
        </View>
      </HorizontalView>
      <HorizontalView style={styles.margin}>
        <Text14 textStyle={styles.txtPrice}>{price}</Text14>
        <View style={styles.flexRow}>
          <Text12 textStyle={styles.txtPercentage}>{percentage}</Text12>
          <Text12 textStyle={styles.txtPercentage}>Job Success</Text12>
        </View>
      </HorizontalView>
      <HorizontalView style={styles.btnMargin}>
        <View style={styles.headBtn}>
          <Text14 textStyle={styles.txtButton}>{buttonText}</Text14>
        </View>
        <View style={styles.headBtn}>
          <Text14 textStyle={styles.txtButton}>{buttonText}</Text14>
        </View>
        <View style={styles.headBtn}>
          <Text14 textStyle={styles.txtButton}>{moreButton}</Text14>
        </View>
      </HorizontalView>
      <Text12 textStyle={styles.txtSpecification}>{specification}</Text12>
      <ButtonComp
        onPress={() => {
          navigate('LawyerProfile');
        }}
        text={'View Profile'}
        btnStyle={styles.ButtonComp}
        txtStyle={styles.TxtBtnComp}
      />
      <ButtonComp
        onPress={() => {
          navigate('ChatNow');
        }}
        text={'Chat Now'}
        btnStyle={styles.ButtonCompChat}
        txtStyle={styles.TxtBtnCompChat}
      />
    </View>
  );
};

const Profile = () => {
  let homeData = useSelector(state => state?.lawyer);
  const isLoading = homeData?.status == 'loading' ? true : false;
  const dispatch = useDispatch();
  const Lawyers = () => {
    dispatch(getLawyerReq());
  };
  useFocusEffect(
    React.useCallback(() => {
      Lawyers();
    }, []),
  );
  return (
    <View style={styles.container}>
      <MainHeader text={'Lawyers'} back={<Back />} />
      <View style={styles.mainHead}>
        {
          isLoading?
          <ActivityIndicator size={50} color={COLORS?.black}/>
            :
            <FlatList
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          data={homeData?.job?.docs}
          keyExtractor={(index, item) => item + index.toString()}
          renderItem={({item}) => (
            <LawyerInformation
              image={item.image || Paths.imagePerson}
              name={`${item.first_name} ${item.last_name}`}
              gmail={item.email}
              price={item.price || '$15'}
              percentage={item.percentage || '98%'}
              buttonText={item.buttonText || 'Death Case'}
              moreButton={item.moreButton || '+11'}
              specification={
                item.specification ||
                'This is the one we talked about. HO states permits golorem ups talkedf about your HO This is the one we talked about. HO states permits golorem ups talkedf about your HO'
              }
            />
          )}
        />
        }
      </View>
    </View>
  );
};
export default Profile;
