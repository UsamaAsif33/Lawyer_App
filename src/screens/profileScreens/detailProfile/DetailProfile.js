import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Back from '../../../assets/svgs/Back';
import MainHeader from '../../../components/mainScreensHeader/MainHeader';
import {Paths} from '../../../assets/images/imagesPath/Path';
import {Text12, Text14, Text24} from '../../../components/Text/Text';
import HorizontalView from '../../../components/horizontalView/HorizontalView';
import ButtonComp from '../../../components/Button/ButtonComp';
import { navigate } from '../../../navigation/rootNavigation';

const DetailProfile = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Profile'} back={<Back />} />
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
            <Text14 textStyle={styles.headingTitle}>Lawyer ID</Text14>
            <Text12 textStyle={styles.txtValue}>3567-SKU</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>First Name</Text14>
            <Text12 textStyle={styles.txtValue}>Mobina</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Last Name</Text14>
            <Text12 textStyle={styles.txtValue}>Mirbadheri</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Phone Number-1</Text14>
            <View style={styles.countryFlex}>
              <Text12 textStyle={styles.txtCountryLetter}>US</Text12>
              <Text12 textStyle={styles.txtValue}>+1(555)555123</Text12>
            </View>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Phone Number-2</Text14>
            <View style={styles.countryFlex}>
              <Text12 textStyle={styles.txtCountryLetter}>US</Text12>
              <Text12 textStyle={styles.txtValue}>+1(555)555123</Text12>
            </View>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Email</Text14>
            <Text12 textStyle={styles.txtValue}>
              Mobinamirbagheri@gmail.com
            </Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Webpage</Text14>
            <Text12 textStyle={styles.txtValue}>Mobinamirbagheri.com</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Address</Text14>
            <Text12 textStyle={styles.txtValue}>
              New York, Tricon Building, 54430, USA
            </Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Category</Text14>
            <Text12 textStyle={styles.txtValue}>Death Case</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Group</Text14>
            <Text12 textStyle={styles.txtValue}>Death Case</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Article</Text14>
            <Text12 textStyle={styles.txtValue}>Death Case</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Country</Text14>
            <Text12 textStyle={styles.txtValue}>USA</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>City</Text14>
            <Text12 textStyle={styles.txtValue}>New York</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Area Name</Text14>
            <Text12 textStyle={styles.txtValue}>East Downtown District</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Building</Text14>
            <Text12 textStyle={styles.txtValue}>Downtown Hall</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Branch</Text14>
            <Text12 textStyle={styles.txtValue}>Downtown Hall</Text12>
          </HorizontalView>
          <HorizontalView style={styles.horizontalMargin}>
            <Text14 textStyle={styles.headingTitle}>Working Location</Text14>
            <Text12 textStyle={styles.txtValue}>
              New York, Tricon Building,{'\n'} 54430, USA
            </Text12>
          </HorizontalView>

          <Text14 textStyle={styles.txtLawyerDescription}>
            Lawyer Description
          </Text14>
          <Text12 textStyle={styles.lawyerDescription}>
            This is the one we talked about. HO states permits golorem ups
            talkedf about your HO This is the one we talked about. HO states
            permits golorem ups talkedf about your HO
          </Text12>

          <ButtonComp
            onPress={() => {
              navigate('LawyerProfile');
            }}
            text={'Continue'}
            btnStyle={styles.ButtonComp}
            txtStyle={styles.TxtBtnComp}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailProfile;
