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
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    gap: 10,
    // height: 52,
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
  textInputTitle: {
    fontWeight: 600,
    color: COLORS.black01,
    marginTop: hp('3%'),
  },
  txtCreateProfile: {
    fontWeight: 700,
    color: COLORS.darkBlack,
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },
});
