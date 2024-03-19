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
    paddingHorizontal: 25,
   marginVertical:10
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    height: hp('4.8%'),
    width: wp('71%'),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.7%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  TxtBtnComp: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
  ButtonCompChat: {
    backgroundColor: COLORS.white,
    height: hp('4.8%'),
    width: wp('71%'),
    borderColor: COLORS.primary,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1.7%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  TxtBtnCompChat: {
    fontFamily: 'Inter-Regular',
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  headFlatlist: {
    borderWidth: 0.60,
    borderColor: COLORS.lightBlack02,
    borderRadius: 8,
    paddingHorizontal: wp('6%'),
    paddingVertical: hp('1%'),
    marginTop:hp('2%'),
  },
  txtName: {
    fontWeight: '700',
    color: COLORS.primary02,
    width:wp('45%')
  },
  txtGmail: {
    fontWeight: '500',
    color: COLORS.lightGrey4,
    width:wp('45%')
  },
  txtPrice: {
    color: COLORS.black01,
    fontWeight: '700',
  },
  txtPercentage: {
    color: COLORS.black01,
    fontWeight: '500',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 3,
  },
  margin: {
    marginTop: hp('1.2%'),
  },
  headBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('3.3%'),
    width: wp('23.5%'),
    borderWidth: 1,
    borderColor: COLORS.neutral,
    borderRadius: 42,
  },
  txtButton: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  btnMargin: {
    marginTop: hp('1.7%'),
  },
  txtSpecification: {
    marginTop: hp('1.7%'),
    color: COLORS.black01,
    lineHeight: 18,
    fontWeight: '400',
  },
  flatListStyle: {
    marginBottom:hp('10%'),
    maxHeight:hp('75%'),
  },
});
