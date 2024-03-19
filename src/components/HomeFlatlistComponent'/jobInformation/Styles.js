import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    // height:hp('16%'),
    borderColor: COLORS.lightBlack01,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal:wp('3%'),
    paddingTop:hp('1.8%'),
    paddingBottom:hp("1.5%"),
    marginBottom:hp('1.4%'),
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headBelow: {
    flexDirection: 'row',
  },
  headText: {
    marginLeft:wp('4%'),
  },
  txtJobName: {
    color: COLORS.lightBlue01,
  },
  txtAddress: {
    color: COLORS.lightBlue02,
    marginTop:hp('0.5%'),
  },
  headJobEye:{
    marginRight:wp('4%'),
  },
  txtSpecification:{
    marginTop:hp('1.3%'),
  },

});
