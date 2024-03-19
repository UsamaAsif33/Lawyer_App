import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../assets/svgs/Back';
import {Paths} from '../../assets/images/imagesPath/Path';
import {Text16, Text20} from '../../components/Text/Text';

const TermsAndCondition = () => {
  return (
    <View style={styles.container}>
      <MainHeader back={<Back />} content={Paths.imageHead} type="image" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHead}>
          <Text20 textStyle={styles.headingTxt}>Terms & Conditions</Text20>
          <Text16 textStyle={styles.detailTermsAndCondition}>
            By accessing the lawyer dashboard app, you agree to comply with and
            be bound by the following terms and conditions:
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Access and Use:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            You must be a licensed lawyer to access and use the app. You are
            responsible for maintaining the confidentiality of your account
            information.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Job Selection:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            Jobs posted on the app are for informational purposes only. [Your
            Company Name] does not guarantee the availability or accuracy of job
            listings.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Termination:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            We reserve the right to terminate or suspend your account at any
            time for any reason without notice.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>
            Intellectual Property:
          </Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            The app and its original content, features, and functionality are
            owned by [Your Company Name] and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Governing Law:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            These terms and conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction].
          </Text16>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermsAndCondition;
