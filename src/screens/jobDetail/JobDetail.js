import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import {Text12, Text14, Text20} from '../../components/Text/Text';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import {Paths} from '../../assets/images/imagesPath/Path';
import CommunicationIcon from '../../assets/svgs/CommunicationIcon';
import JobEye from '../../assets/svgs/JobEye';

const JobDetail = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Job Details'} back={<Back />} />
      <ScrollView>
        <View style={styles.mainHead}>
          <View style={styles.headJobDetail}>
            <HorizontalView style={styles.widthJobDetail}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Job Title:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>
                  Death Category:
                </Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Job Price:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>$350</Text14>
              </View>
            </HorizontalView>
            <View style={styles.headAlign}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>
                  Job Posting Date:
                </Text14>
                <Text14 textStyle={styles.headTxtDate}>Jan 8, 2024</Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>
                  Appointment Date:
                </Text14>
                <Text14 textStyle={styles.descriptionTxt}>Jan 8, 2024</Text14>
              </View>
            </View>
            <Text14 textStyle={styles.jobDescriptionTxt}>
              Job Description:
            </Text14>
            <Text14 textStyle={styles.descriptionTxt}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Text14>
          </View>
          <Text20 textStyle={styles.categoryTxt}>Category</Text20>
          <View style={styles.headCategory}>
            <HorizontalView style={styles.categoryWidth}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Category:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>Death Case</Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Group:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>Case Group</Text14>
              </View>
            </HorizontalView>
            <Text14 textStyle={styles.articleTxt}>Article:</Text14>
            <Text14 textStyle={styles.descriptionTxt}>Death Case</Text14>
          </View>
          <Text20 textStyle={styles.locationTxt}>Location</Text20>
          <View style={styles.headLocation}>
            <HorizontalView style={styles.widthLocation}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Country:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>USA</Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>City:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>New York</Text14>
              </View>
            </HorizontalView>
            <HorizontalView style={styles.headBuilding}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Building</Text14>
                <Text14 textStyle={styles.descriptionTxt}>Downtown Hall</Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Branch:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>
                  Downtown Office
                </Text14>
              </View>
            </HorizontalView>
            <View style={styles.headAddress}>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Address:</Text14>
                <Text14 textStyle={styles.txtAddress}>
                  New York, Tricon{'\n'}Building, 54430, USA
                </Text14>
              </View>
              <View>
                <Text14 textStyle={styles.headingTitleTxt}>Area Name:</Text14>
                <Text14 textStyle={styles.descriptionTxt}>Downtown Hall</Text14>
              </View>
            </View>
          </View>
          <Text20 textStyle={styles.txtPosted}>Posted By</Text20>
          <View style={styles.headPicture}>
            <View style={styles.alignPicture}>
              <HorizontalView style={styles.gapPicture}>
                <Image style={styles.imageStyle} source={Paths.imagePerson} />
                <View style={styles.margin}>
                  <Text20 textStyle={styles.nameTxt}>Mike Smith</Text20>
                  <Text14 textStyle={styles.gmailTxt}>
                    Mikesmith@gmail.com
                  </Text14>
                </View>
              </HorizontalView>
              <View style={styles.alineItem}>
                <TouchableOpacity>
                  <CommunicationIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <JobEye />
                </TouchableOpacity>
              </View>
            </View>
            <Text12 textStyle={styles.descriptionPersonTxt}>
              This is the one we talked about. HO states permits golorem ups
              talkedf about your HO This is the one we talked about. HO states
              permits golorem ups talkedf about your HO
            </Text12>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobDetail;
