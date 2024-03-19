import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {Paths} from '../../assets/images/imagesPath/Path';
import {Text16, Text20} from '../../components/Text/Text';
import LogOutIcon from '../../assets/svgs/LogOutIcon';

const About = () => {
  return (
    <View style={styles.container}>
      <MainHeader back={<Back />} content={Paths.imageHead} type="image" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainHead}>
          <Text20 textStyle={styles.headingTxt}>About</Text20>
          <Text16 textStyle={styles.detailAbout}>
            Istinsbe, we are driven by a steadfast commitment to reshape the
            landscape of legal professionals' career journeys. Founded on the
            principles of innovation, collaboration, and efficiency, our
            platform stands as a testament to our vision for a legal community
            seamlessly connected with career opportunities.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Mission Statement:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            Our mission is to empower legal professionals by providing a
            cutting-edge platform that streamlines the process of job discovery
            and selection. We aim to bridge the gap between legal talent and
            employers, fostering a dynamic and mutually beneficial ecosystem
            within the legal industry.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>Core Values:</Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            Integrity: We uphold the highest standards of integrity, ensuring
            transparency and trust in every interaction on our platform.
            Innovation: We embrace innovation as a driving force, constantly
            seeking new and effective ways to enhance the legal professionals'
            experience. Collaboration: We believe in the power of collaboration,
            fostering a community where legal experts can connect, share
            insights, and propel the industry forward.
          </Text16>
          <Text16 textStyle={styles.subheadingTxt}>
            User-Centric Approach:{' '}
          </Text16>
          <Text16 textStyle={styles.subheadingDescriptionTxt}>
            Users are at the heart of everything we do. We are committed to
            understanding and addressing the unique needs of legal professionals
            to provide an unparalleled user experience.
          </Text16>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
