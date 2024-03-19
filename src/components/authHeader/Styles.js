import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  btnBack: {
    position: 'absolute',
    marginTop: hp('1%'),
    marginLeft: wp('7%'),
  },
  headIstinsbe: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  txtIstinsbe: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
    fontFamily:"Inter-Regular",
  },
});
