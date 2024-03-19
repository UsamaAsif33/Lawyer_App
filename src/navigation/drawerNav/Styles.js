import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';

export const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(49, 46, 46, 0.55)',
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
  txtSure: {
    marginTop: hp('2.5%'),
    color: COLORS.primary01,
  },
  txtLogout: {
    marginTop: hp('0.6%'),
    color: COLORS.primary01,
  },
  containerFlex: {
    flex: 1,
  },
  headDrawer: {
    height: hp('11.8%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightWhite01,
    paddingBottom: hp('0.5'),
    paddingHorizontal: wp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtIstinsbe: {
    fontWeight: '700',
    lineHeight: 30,
  },
  headDrawerItems: {
    flex: 1,
    paddingHorizontal: wp('7%'),
    marginTop: hp('3.25%'),
  },
  headLogOut: {
    position: 'absolute',
    bottom: hp('1.1%'),
    width: wp('50%'),
    marginLeft: wp('11.25%'),
  },
  txtLogOut: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: wp('-3.5%'),
    color: COLORS.primary,
  },
});
