import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainHead: {
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
    paddingBottom: hp('18%'),
  },
  headJobDetail: {
    borderRadius: 8,
    paddingVertical: hp('2.5%'),
    paddingHorizontal: wp('2.5%'),
    borderWidth: 1,
    borderColor: COLORS.lightBlack01,
  },
  widthJobDetail: {
    width: wp('67%'),
  },
  headingTitleTxt: {
    color: COLORS.black,
    fontWeight: '800',
  },
  descriptionTxt: {
    color: COLORS.black,
    fontWeight: '600',
    marginTop: 4,
  },
  headAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  headTxtDate: {
    color: COLORS.black,
    fontWeight: '600',
    marginTop: hp('1%'),
  },
  jobDescriptionTxt: {
    color: COLORS.black,
    fontWeight: '800',
    marginTop: hp('3%'),
  },
  descriptionTxt: {
    color: COLORS.black,
    fontWeight: '400',
  },
  categoryTxt: {
    marginTop: hp('3%'),
    fontWeight: 700,
    color: COLORS.primary,
  },
  headCategory: {
    marginTop: hp('1.5%'),
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.lightBlack01,
  },
  categoryWidth: {
    width: wp('67%'),
  },
  articleTxt: {
    marginTop: hp('1%'),
    color: COLORS.black,
    fontWeight: '800',
  },
  locationTxt: {
    marginTop: hp('3%'),
    fontWeight: 700,
    color: COLORS.primary,
  },
  headLocation: {
    marginTop: hp('1.5%'),
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.lightBlack01,
  },
  widthLocation: {
    width: wp('64%'),
  },
  headBuilding: {
    width: wp('76%'),
    marginTop: hp('3%'),
  },
  headAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('72%'),
    marginTop: hp('3%'),
  },
  txtAddress: {
    color: COLORS.black,
    fontWeight: '400',
    marginTop: hp('0.8%'),
  },
  txtPosted: {
    marginTop: hp('3%'),
    fontWeight: 700,
    color: COLORS.primary,
  },
  headPicture: {
    marginTop: hp('1.5%'),
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.lightBlack01,
  },
  alignPicture: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  gapPicture: {
    // gap: 20,
  },
  imageStyle: {
    backgroundColor: COLORS.primary,
    height: 85,
    width: 85,
    borderWidth: 3,
    borderColor: COLORS.primary,
    borderRadius: 42.5,
    marginLeft: wp('4%'),
  },
  nameTxt: {
    fontWeight: 700,
    color: COLORS.primary02,
  },
  margin: {
    left: wp('5%'),
  },
  gmailTxt: {
    fontWeight: 500,
    color: COLORS.lightGrey4,
  },
  alineItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionPersonTxt: {
    marginTop: 5,
    fontWeight: 400,
    color: COLORS.black,
  },
});
