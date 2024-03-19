import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../shared/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainHead: {
    marginLeft: wp('7%'),
    marginRight: hp('10.25%'),
    marginTop: hp('2.3%'),
    marginBottom:hp('3%'),
  },
  headingTxt: {
    fontWeight: '700',
    color: COLORS.primary,
    padding: 10,
  },
  detailTermsAndCondition: {
    paddingLeft: wp('2.5%'),
    lineHeight: 30.97,
    fontWeight: '400',
  },

 
});
