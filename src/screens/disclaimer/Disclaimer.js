import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../assets/svgs/Back';
import {Paths} from '../../assets/images/imagesPath/Path';
import {Text16, Text20} from '../../components/Text/Text';

const Disclaimer = () => {
  return (
    <View style={styles.container}>
      <MainHeader back={<Back />} content={Paths.imageHead} type="image" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHead}>
          <Text20 textStyle={styles.headingTxt}>Disclaimer</Text20>
          <Text16 textStyle={styles.detailTermsAndCondition}>
            The information contained in the lawyer dashboard app is for general
            information purposes only. While we strive to keep the information
            up to date and accurate, we make no representations or warranties of
            any kind, express or implied, about the completeness, accuracy,
            reliability, suitability, or availability with respect to the app or
            the information, products, services, or related graphics contained
            on the app for any purpose.{'\n'} Any reliance you place on such
            information is therefore strictly at your own risk. In no event will
            we be liable for any loss or damage, including without limitation,
            indirect or consequential loss or damage, or any loss or damage
            whatsoever arising from loss of data or profits arising out of, or
            in connection with, the use of this app.
          </Text16>
        </View>
      </ScrollView>
    </View>
  );
};

export default Disclaimer;
