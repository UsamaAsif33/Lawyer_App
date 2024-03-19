import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headcomponent: {
    marginHorizontal: wp('7%'),
  },
  btnStyle:{
    backgroundColor: COLORS.primary,
    marginTop: hp('3%'),
    height: hp('6.5%'),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle:{
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },
  DropdownTextHead: {
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical:hp('2%'),
    marginTop: hp('3%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SearchCategoryTxt: {
    fontWeight: '400',
    alignSelf: 'center',
    color: COLORS.lightGrey4,
  },
  DropdownArea: {
    marginTop: hp('1%'),
    borderRadius: 8,
    borderColor: COLORS.lightGrey2,
    borderWidth: 0.5,
  },
  LocationItem:{
    padding: hp('1%'),
    marginTop:hp('1.5%'),
    paddingLeft:wp('4%'),
  },
  DropdownText:{
    fontWeight: '400',
    color: COLORS.lightGrey4,
  },
  signUpTxt:{fontWeight: 700, color: COLORS.darkBlack}
});
