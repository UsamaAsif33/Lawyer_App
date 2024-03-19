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
  headFlatList: {
    
  },
  headFlatList: {
    paddingHorizontal:wp('7%'),
    marginTop: hp('1.12%'),
    marginBottom:hp('1%'),
  },
  flatListText: {
    borderRadius: 18,
    paddingTop:hp('1%'),
    paddingRight:wp( '2.5%'),
    paddingBottom: hp('1%'),
    paddingLeft:wp ('3%'),
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-start',
    marginTop:hp('2%'),
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  horizontalView: {
    position: 'fixed',
    marginTop:hp('2.5%'),
    bottom: hp('2%'),
    alignSelf: 'center',
    justifyContent:"center"
  },
  headTextInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 10,
    width:wp('84.25%'),
    height: hp('5.625%'),
  },
  touchableHead: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    
  },
});
