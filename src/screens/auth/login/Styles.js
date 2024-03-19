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
  txtLogin: {
    marginTop: hp('3%'),
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: 'Inter-Regular',
  },
  headcomponent: {
    marginHorizontal: wp('7%'),
  },
  headCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  txtForgetPassword: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.primary,
  },
  headBtnComp: {
    marginTop: hp('2.3%'),
  },
  headLineComp: {
    marginTop: hp('3.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtContinueWith: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  linecomp: {
    width: wp('26%'),
    height: 2,
    backgroundColor: COLORS.grey,
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    gap: 10,
    height: hp('6%'),
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TxtBtnComp: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  ButtonCompWithIcon: {
    backgroundColor: COLORS.white,
    gap: 10,
    height: hp('6.3%'),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TxtButtonCompWithIcon: {
    fontFamily: 'Inter-Regular',
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },
});
