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
    marginHorizontal: wp('7%'),
    marginTop: hp('2%'),
    paddingBottom: hp('15%'),
  },
  ButtonComp: {
    backgroundColor: COLORS.primary,
    height: hp('4.8%'),
    width: wp('72%'),
    borderRadius: 24,
    marginLeft:"auto",
    marginRight:"auto",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  TxtBtnComp: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '700',
  },
  headImage: {
    marginHorizontal: wp('11%'),
    alignItems: 'center',
    marginTop: hp('6%'),
    
  },
  imageStyle: {
    borderRadius: 83.5,
    height: 167,
    width: 167,
    borderWidth: 4,
    borderColor: COLORS.primary,
  },
  txtName: {
    marginTop: hp('3.6%'),
    fontWeight: 600,
    color: COLORS.primary02,
  },
  txtGmail: {
    marginTop: hp('1.3%'),
    fontWeight: 500,
    color: COLORS.lightGrey4,
  },
  txtDetailPerson: {
    textAlign: 'center',
    marginTop: hp('1%'),
    fontWeight: 400,
    color: COLORS.black01,
  },
  headDetail: {
    marginHorizontal: wp('12%'),
    paddingBottom:hp('2%')
  },
  headingTxt: {
    fontWeight: '700',
    color: COLORS.black02,
    marginTop:hp('2%'),
  },
  valueTxt: {
    marginTop: hp('1%'),
    fontWeight: '400',
    color: COLORS.black02,
  },
  
  descriptionTxt:{
    fontWeight: '700',
    color: COLORS.black02,
    marginTop:hp('2%'),
  },
  descriptiondetail:{
    marginTop: hp('0.8%'),
    fontWeight: '300',
    color: COLORS.black02,
    lineHeight:18
  },
  


});
