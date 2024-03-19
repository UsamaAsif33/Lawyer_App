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
    flex:1,
    marginHorizontal: wp('7%'),
  },
  btnStyle:{
    backgroundColor: COLORS.primary,
    marginTop: hp('3%'),
    height: hp('6%'),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle:{
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
