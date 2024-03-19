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
  headScrollView: {
    marginBottom: hp('12%'),
  },

  headDropDown: {
    marginTop: hp('3.1%'),
    paddingHorizontal: wp('6.8%'),
  },
  insideStyleDropDown: {
    borderColor: COLORS.lightGrey3,
    marginTop: hp('1%'),
  },
  txttitle: {
    color: COLORS.black01,
    fontWeight: '500',
  },
  txtTitleMargin: {
    color: COLORS.black01,
    fontWeight: '500',
    marginTop: hp('2.8%'),
  },
  headMargin: {
    marginTop: hp('2.8%'),
    marginHorizontal: wp('6.8%'),
  },
  DescriptionTextInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    fontWeight: '400',
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: wp('4%'),
    height: hp('14%'),
    textAlignVertical: 'top',
    marginTop: hp('1%'),
  },
  ButtonCompWithIcon: {
    backgroundColor: COLORS.white,
    gap: 10,
    height: hp('7.5%'),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1%'),
  },
  TxtButtonCompWithIcon: {
    fontFamily: 'Inter-Regular',
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: '700',
  },
  ButtonComponent: {
    backgroundColor: COLORS.white,
    gap: 10,
    width: wp('37%'),
    height: hp('4.5%'),
    borderRadius: 42,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.8%'),
  },
  TxtButtonComponent: {
    fontFamily: 'Inter-Regular',
    color: COLORS.primary,
    fontSize: 10.5,
    fontWeight: '700',
  },
  TxtDone: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 10.5,
    fontWeight: '700',
  },

  HeadDoneTxt: {
    backgroundColor: COLORS.primary,
    gap: 10,
    height: hp('4.5%'),
    width: wp('37%'),
    borderRadius: 42,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.8%'),
  },
  HeadDoneTxt: {
    backgroundColor: COLORS.primary,
    gap: 10,
    height: hp('4.5%'),
    width: wp('37%'),
    borderRadius: 42,
    borderWidth: 1,
    borderColor: COLORS.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.8%'),
  },
  ModalTxtDone: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '400',
  },
  ModalHeadDone: {
    backgroundColor: COLORS.primary,
    height: hp('6.5%'),
    width: wp('75%'),
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3.3%'),
  },
  modalHead: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgba(49, 46, 46, 0.55)"
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: wp('7.5%'),
    borderRadius: 12,
    padding: 24,
    elevation: 3,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headCross: {
    alignSelf: 'flex-end',
  },
  headCenter: {
    alignItems: 'center',
    
  },
  txtSuccessfully: {
    marginTop: hp('2.5%'),
    color: COLORS.primary01,
  },
  txtPosted: {
    marginTop: hp('0.6%'),
    color: COLORS.primary01,
  },
  DropdownHead: {
    marginTop: hp('0.5%'),
    borderColor: COLORS.greySecond,
  },
  DropdownTextHead: {
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    height: hp('6.5%'),
    marginTop: hp('0.5%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SearchCategoryTxt: {
    fontWeight: '400',
    alignSelf: 'center',
    color: COLORS.lightGrey4,
  },
  DropdownArea: {
    marginTop: hp('1%'),
    borderRadius: 8,
    borderColor: COLORS.lightGrey2,
    borderWidth: 0.5,
  },
  LocationItem:{
    padding: hp('1%'),
    marginTop:hp('1.5%'),
    paddingLeft:wp('4%'),
  },
  DropdownText:{
    fontWeight: '400',
    color: COLORS.lightGrey4,
  },
  ErrorMsgStyleLeftMargin: {
    marginTop: hp('0.5%'),
    color: 'red',
    marginLeft:wp('6.8%'),
  },
  ErrorMsgStyle: {
    marginTop: hp('0.5%'),
    color: 'red',
  },

});
