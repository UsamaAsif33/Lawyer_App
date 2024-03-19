import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    marginRight: wp('3.7%'),
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 1000,
  },
  height: {
    paddingHorizontal: wp('5.8%'),
    paddingVertical: hp('1%'),
  },
  color: {
    color: COLORS.white,
  },
});
