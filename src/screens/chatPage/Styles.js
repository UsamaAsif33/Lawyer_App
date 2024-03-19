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
  headFlatlist: {
    marginHorizontal: wp('8%'),
    marginTop: hp('3.5%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lighterWhite,
    paddingBottom: hp('1.7%'),
  },
  imageStyle: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: COLORS.neutral,
  },
  nameTxt: {
    color: COLORS.black03,
    fontWeight: '700',
    lineHeight: 24,
  },
  aboutTxt: {
    color: COLORS.lightGrey8,
    fontWeight: '400',
    lineHeight: 20,
  },
  timeTxt: {
    color: COLORS.black,
    fontWeight: '600',
    lineHeight: 16,
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    left:wp('3%'),
  },
  flatListStyle: {
    marginBottom: hp('7%'),
    maxHeight: hp('77%'),
  },
  chatBtnStyle: {
    position: 'absolute',
    bottom:hp('13%'),
    right: wp('8%'),
  },
});
