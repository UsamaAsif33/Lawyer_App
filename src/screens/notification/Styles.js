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
  headFlatlist: {
    marginHorizontal: wp('6.3%'),
    marginTop: hp('4.7%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lighterWhite,
    paddingBottom: hp('2%'),
  },
  imageStyle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.neutral,
  },
  nameTxt: {
    color: COLORS.black,
    fontWeight: '700',
    lineHeight: 20,
  },
  aboutTxt: {
    color: COLORS.lightGrey8,
    fontWeight: '400',
    lineHeight: 20,
  },
  timeTxt: {
    color: COLORS.lightGrey9,
    fontWeight: '400',
    lineHeight: 18,
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    left: wp('3%'),
    width: wp('46%'),
  },
  flatListStyle: {
    marginBottom: hp('2%'),
    maxHeight: hp('100%'),
  },
  chatBtnStyle: {
    position: 'absolute',
    bottom: hp('13%'),
    right: wp('8%'),
  },
});
