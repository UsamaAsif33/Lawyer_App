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
  loaderStyle: {
    flex: 1,
    marginTop:hp('-40%')
  },
  headcomponent: {
    marginHorizontal: wp('7%'),
  },
  headBtnMonthlyYearly: {
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  headBtnYearly: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 61,
    width: wp('55%'),
    height: hp('4.5%'),
    backgroundColor: COLORS.whiteShade,
  },
  btnTxt: {
    width: wp('27.5%'),
    height: hp('4.5%'),
    borderRadius: 61,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
