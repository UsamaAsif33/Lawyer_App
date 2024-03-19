import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    headComponent: {
        width:wp('73%'),
        height:hp('6%')
      },
      txtInputWithSearch: {
        fontFamily:"Inter-Regular",
        fontSize:13,
        fontWeight:"400",
        borderColor:COLORS.greySecond,
        borderWidth:1,
        borderRadius:12,
        paddingLeft:wp('12%'),
      },
  
});
