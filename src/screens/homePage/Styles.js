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
  imageHead: {
    width: '100%',
    marginTop: hp('2%'),
  },
  FlatlistHead: {
    marginTop: hp('3.5%'),
    marginLeft: wp('7%'),
  },
  headJobsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4%'),
    marginHorizontal: wp('7%'),
  },
  txtJobs: {
    fontWeight: '700',
    color: COLORS.darkBlack,
  },
  txtView: {
    color: COLORS.darkBlack,
    textDecorationLine: 'underline',
  },
  FlatlistHeight: {
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
    marginBottom: hp('11%'),
  },
});
