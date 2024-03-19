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
  txtVerificationCode: {
    marginTop: hp('3%'),
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: 'Inter-Regular',
  },
  txtVerifyEmailPhone: {
    marginTop: hp('1%'),
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: 'Inter-Regular',
  },
  textInputHead: {
    marginTop:hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    height:hp('6%'),
    width:wp('16%'),
    borderRadius: 20,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.lightWhite,
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
});
