import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {Paths} from '../../assets/images/imagesPath/Path';
import {Text12, Text14, Text24} from '../../components/Text/Text';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import ButtonComp from '../../components/Button/ButtonComp';
import {navigate} from '../../navigation/rootNavigation';

const LawyerProfile = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Lawyer Profile'} back={<Back />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headImage}>
          <Image
            style={styles.imageStyle}
            source={Paths.PersonPictureProfile}
          />
          <Text24 textStyle={styles.txtName}>Mike Smith</Text24>
          <Text14 textStyle={styles.txtGmail}>Mikesmith@gmail.com</Text14>
          <Text12 textStyle={styles.txtDetailPerson}>
            This is the one we talked about. HO states permits golorem ups
            talkedf about your HO This is the one we talked about. HO states
            permits golorem ups talkedf about your HO
          </Text12>
        </View>
        <View style={styles.headDetail}>
          <HorizontalView>
            <View>
              <Text12 textStyle={styles.headingTxt}>Lawyer ID</Text12>
              <Text12 textStyle={styles.valueTxt}>93160</Text12>
              <Text12 textStyle={styles.headingTxt}>Address</Text12>
              <Text12 textStyle={styles.valueTxt}>
                1 Avenue Aristide Briand
              </Text12>
              <Text12 textStyle={styles.headingTxt}>Email</Text12>
              <Text12 textStyle={styles.valueTxt}>Jamesdupont@gmail.com</Text12>
              <Text12 textStyle={styles.headingTxt}>Group</Text12>
              <Text12 textStyle={styles.valueTxt}>Death Case</Text12>
              <Text12 textStyle={styles.headingTxt}>Country</Text12>
              <Text12 textStyle={styles.valueTxt}>USA</Text12>
              <Text12 textStyle={styles.headingTxt}>Area Name</Text12>
              <Text12 textStyle={styles.valueTxt}>
                East Downtown District
              </Text12>
              <Text12 textStyle={styles.headingTxt}>Branch</Text12>
              <Text12 textStyle={styles.valueTxt}>
                East Downtown District
              </Text12>
              <Text12 textStyle={styles.headingTxt}>Price</Text12>
              <Text12 textStyle={styles.valueTxt}>$235</Text12>
            </View>
            <View>
              <Text12 textStyle={styles.headingTxt}>Phone Number</Text12>
              <Text12 textStyle={styles.valueTxt}>+1-746-374-484</Text12>
              <Text12 textStyle={styles.headingTxt}>Phone Number</Text12>
              <Text12 textStyle={styles.valueTxt}>+1-746-374-484</Text12>
              <Text12 textStyle={styles.headingTxt}>Category</Text12>
              <Text12 textStyle={styles.valueTxt}>Death Case</Text12>
              <Text12 textStyle={styles.headingTxt}>Article</Text12>
              <Text12 textStyle={styles.valueTxt}>Death Case</Text12>
              <Text12 textStyle={styles.headingTxt}>City</Text12>
              <Text12 textStyle={styles.valueTxt}>New York</Text12>
              <Text12 textStyle={styles.headingTxt}>Building</Text12>
              <Text12 textStyle={styles.valueTxt}>East Downtown</Text12>
              <Text12 textStyle={styles.headingTxt}>Working Location</Text12>
              <Text12 textStyle={styles.valueTxt}>East Downtown </Text12>
              <Text12 textStyle={styles.headingTxt}>Subscription Plan</Text12>
              <Text12 textStyle={styles.valueTxt}>Starter Plan</Text12>
            </View>
          </HorizontalView>
          <Text12 textStyle={styles.descriptionTxt}>Description</Text12>
          <Text12 textStyle={styles.descriptiondetail}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit metus
            diam nec, risus amet, maecenas.Non pretium curabitur non ante sed.
          </Text12>
          <ButtonComp
            onPress={() => {
              navigate('ChatNow');
            }}
            text={'Chat Now'}
            btnStyle={styles.ButtonComp}
            txtStyle={styles.TxtBtnComp}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LawyerProfile;
