import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  headComponent: {
    margin: hp('2.8%'),
  },
  headFlatList: {
    width: wp('73%'),
    borderRadius: 12,
    marginTop: hp('3.5%'),
    borderColor: COLORS.lightGrey2,
    borderWidth: 1,
    marginLeft: wp('4%'),
  },
  headTxtPrice: {
    flexDirection: 'row',
    marginTop: hp('4.5%'),
  },
  txtDollarSign: {
    fontFamily: 'Inter-Regular',
    color: COLORS.black,
    fontSize: 36,
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  txtPrice: {
    fontFamily: 'Inter-Regular',
    color: COLORS.black,
    fontSize: 48,
    fontWeight: '700',
  },
  btnStyle: {
    backgroundColor: COLORS.primary,
    gap: 5,
    flexDirection: 'row-reverse',
    marginTop: hp('3%'),
    height: hp('4.5%'),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtStyle: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
  },
});
