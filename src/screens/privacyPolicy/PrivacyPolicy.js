import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import {Paths} from '../../assets/images/imagesPath/Path';
import Back from '../../assets/svgs/Back';
import {Text11, Text16, Text20} from '../../components/Text/Text';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <MainHeader back={<Back />} content={Paths.imageHead} type="image" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHead}>
          <Text20 textStyle={styles.headingTxt}>Privacy Policy</Text20>
          <Text16 textStyle={styles.detailPrivacy}>
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your personal information when you use our lawyer
            dashboard application ("the App"). By accessing or using the App,
            you agree to the terms of this Privacy Policy.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>
            1. Information We Collect:
          </Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              Personal Information: We may collect personal information,
              including but not limited to your name, contact information, and
              professional credentials, to provide you with access to the App
              and its features.
            </Text16>
          </View>
          <Text16 textStyle={styles.subheadingTxt}>
            2. How We Use Your Information:
          </Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              We use your personal information to authenticate your identity,
              provide you with access to the App, and facilitate your use of its
              features.
            </Text16>
          </View>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              Your information may be used to communicate important updates,
              changes, or new features related to the App.
            </Text16>
          </View>
          <Text16 textStyle={styles.subheadingTxt}>
            3. Information Sharing:
          </Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties.
            </Text16>
          </View>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              Your information may be shared with authorized personnel within
              our organization for administrative purposes.
            </Text16>
          </View>
          <Text16 textStyle={styles.subheadingTxt}>4. Security:</Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              We implement security measures to protect your personal
              information from unauthorized access, disclosure, alteration, and
              destruction.
            </Text16>
          </View>
          <Text16 textStyle={styles.subheadingTxt}>5. Data Retention:</Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy.
            </Text16>
          </View>
          <Text16 textStyle={styles.subheadingTxt}>
            6. Changes to Privacy Policy:
          </Text16>
          <View style={styles.horizontalView}>
            <View style={styles.dotStyle}></View>
            <Text16 textStyle={styles.subheadingDescriptionTxt}>
              We reserve the right to modify this Privacy Policy at any time.
              Changes will be effective immediately upon posting on the App.
            </Text16>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
