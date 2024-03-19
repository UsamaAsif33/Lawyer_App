import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainHead: {
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
  },
  FlatlistHeight: {
    marginTop:hp('3%'),
    maxHeight: hp('68%'),
    paddingBottom: hp('10%'),
  },
  AllJobBtnHead: {
    justifyContent: 'space-around',
    backgroundColor: COLORS.lightGrey5,
    marginTop:hp('3%'),
    borderRadius: 8,
    height:hp('6%'),
  },
  FlatListHead: {
    marginTop:hp('3%'),
  },
});
