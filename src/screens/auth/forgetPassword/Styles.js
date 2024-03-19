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
  txtForgetPassword: {
    marginTop: hp('3%'),
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: 'Inter-Regular',
  },
  txtResetPassword: {
    marginTop: hp('1%'),
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: 'Inter-Regular',
  },
  marginTop: {
    marginTop: hp('3%'),
    backgroundColor: 'red',
  },
  btnStyle: {
    backgroundColor: COLORS.primary,
    marginTop: hp('3%'),
    height: hp('6.5%'),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },
});
