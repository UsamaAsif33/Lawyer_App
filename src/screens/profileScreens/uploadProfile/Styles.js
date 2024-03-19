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
    paddingBottom: hp('5%'),
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    gap: 10,
    height: hp('6%'),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),
  },
  TxtBtnComp: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  txtCreateProfile: {
    fontWeight: 700,
    color: COLORS.darkBlack,
  },
  headImage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  positionImage: {
    position: 'relative',
  },
  styleImage: {
    borderRadius: 53,
    height: 106,
    width: 106,
  },
  headUploadIcon: {
    position: 'absolute',
    bottom: hp('1%'),
    left: wp('20%'),
  },
  txtUploadProfile: {
    fontWeight: 700,
    color: COLORS.primary,
    marginLeft: wp('2.5%'),
  },
  textInputTitle: {
    fontWeight: 600,
    color: COLORS.black01,
    marginTop: hp('3%'),
  },
  packageTextInputContainerStyle: {
    borderWidth: 1,
    borderColor: COLORS.lightGrey3,
    borderRadius: 12,
    width: '100%',
    marginTop: hp('1%'),
    height: hp('7%'),
  },
  packageTextInputStyle: {
    fontSize: 13,
    backgroundColor: COLORS.white,
    width: '100%',
    left: wp('-7%'),
    height: hp('6%'),
  },
  packageTextContainerStyle: {
    width: '100%',
    borderRadius: 12,
    borderLeftWidth: 0,
    backgroundColor: COLORS.white,
  },
  headAddCircle: {
    flexDirection: 'row',
    gap: 6,
    marginTop: hp('1%'),
  },
  txtAddPhone: {
    fontWeight: 500,
    color: COLORS.primary,
  },
  customTextInput: {
    marginTop: hp('1%'),
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontWeight: '400',
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: wp('12%'),
  },
  headMailIcon: {
    position: 'absolute',
    top: hp('3%'),
    left: wp('4%'),
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },
});
