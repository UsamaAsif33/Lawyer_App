import {StyleSheet} from 'react-native';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../../shared/theme';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBlack02,
  },
  modalHead: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: wp('78%'),
    elevation: 3,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  BtnHeadResetAll: {
    backgroundColor: COLORS.white,
    height: hp('4.8%'),
    width: wp('31%'),
    borderWidth: 1,
    borderRadius: 42,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.3%'),
  },
  BtnHeadApply: {
    backgroundColor: COLORS.primary,
    height: hp('4.8%'),
    width: wp('31%'),
    borderRadius: 42,
    borderColor: COLORS.neutral,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.3%'),
  },
  BtnTxtResetAll: {
    fontFamily: 'Inter-Regular',
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '800',
  },
  BtnTxtApply: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },
  FilterLine: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lighterWhite,
  },
  ModalTxtFIlter: {
    fontWeight: '600',
    color: COLORS.black,
  },
  ModalPadding: {
    padding: 24,
  },
  ModalWidth: {
    width: wp('10%'),
  },
  JobGap: {
    gap: 10,
  },
  LawyerGap: {
    gap: 5,
  },
  RadioTxtColor: {
    color: COLORS.secondary,
  },
  FilterTxtComponent: {
    color: COLORS.black,
    marginTop: hp('2.3%'),
  },
  DropdownZindex: {
    zIndex: 5,
  },
  DropdownHead: {
    marginTop: hp('0.5%'),
    borderColor: COLORS.greySecond,
  },
  DropdownTextHead: {
    borderColor: COLORS.greySecond,
    borderWidth: 1,
    borderRadius: 12,
    height: hp('7%'),
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
  LocationItem: {
    padding: hp('1%'),
    marginTop: hp('1.5%'),
    paddingLeft: wp('4%'),
  },
  DropdownText: {
    fontWeight: '400',
    color: COLORS.lightGrey4,
  },
});
