import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('7%'),
    marginTop: hp('1%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lighterWhite,
    paddingBottom: hp('1%'),
  },
  txtText: {
    height:hp('6%'),
    paddingTop:hp('1.4%'),
    color:COLORS.primary,
    fontWeight:"700",
  },
  headComponent: {
    flexDirection: 'row',
  },
});
