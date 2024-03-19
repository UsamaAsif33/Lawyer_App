import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../shared/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainHead: {
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
    paddingBottom: hp('15%'),
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    gap: 10,
    height: hp('5%'),
    width: wp('30%'),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('6.5%'),
    alignSelf: 'flex-end',
  },
  TxtBtnComp: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '700',
  },
  headImage: {
    marginHorizontal: wp('10%'),
    alignItems: 'center',
    marginTop: hp('3.5%'),
  },
  imageStyle: {
    borderRadius: 83.5,
    height: 167,
    width: 167,
    borderWidth: 4,
    borderColor: COLORS.primary,
  },
  txtName: {
    marginTop: hp('3.6%'),
    fontWeight: 600,
    color: COLORS.primary02,
  },
  txtGmail: {
    marginTop: hp('1.3%'),
    fontWeight: 500,
    color: COLORS.lightGrey4,
  },
  txtDetailPerson: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontWeight: 400,
    color: COLORS.black01,
  },
  headDetail: {
    padding: 24,
    marginTop: hp('3.3%'),
  },
  headingTitle: {
    fontWeight: 500,
    color: COLORS.lightGrey6,
  },
  txtValue: {
    fontWeight: 500,
    color: COLORS.lightGrey7,
  },
  horizontalMargin: {
    marginTop: hp('4%'),
  },
  txtCountryLetter: {
    right: wp('2%'),
    fontWeight: 500,
    color: COLORS.lightGrey7,
  },
  countryFlex: {
    flexDirection: 'row',
  },
  txtLawyerDescription: {
    marginTop: hp('4%'),
    fontWeight: 500,
    color: COLORS.lightGrey6,
  },
  lawyerDescription: {
    lineHeight: 18,
    alignItems: 'center',
    marginTop: hp('1.7%'),
    fontWeight: 500,
    color: COLORS.lightGrey7,
  },
});
