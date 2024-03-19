import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    height: hp('5%'),
    marginTop:hp("1%"),
    width: wp('10%'),
    borderColor: COLORS.lightBlack01,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
  },
});
