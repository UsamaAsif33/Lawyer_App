import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headComponent: {
    position: 'relative',
  },
  txtInputWithIcon: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontWeight: '400',
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: wp('4%'),
  },
  eyePositionStyle: {
    position: 'absolute',
    right: 16,
    bottom: 13,
  },
});
