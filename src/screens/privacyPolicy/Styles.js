import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';

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
  detailPrivacy: {
    paddingLeft: wp('2.5%'),
    lineHeight: 30.97,
    fontWeight: '400',
  },
  subheadingTxt: {
    paddingLeft: wp('5%'),
    paddingTop: hp('0.5%'),
    fontWeight: '700',
    color: COLORS.lightGrey4,
  },
  dotStyle: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: COLORS.lightGrey4,
    marginTop: hp('2%'),
  },
  subheadingDescriptionTxt: {
    lineHeight: 30.97,
    marginLeft: wp('1.8%'),
  },
  horizontalView: {
    flexDirection: 'row',
    marginLeft: wp('11%'),
    paddingTop: hp('0.5%'),
  },
});
