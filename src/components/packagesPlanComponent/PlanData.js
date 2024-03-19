import {View, Text} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Text12, Text18} from '../Text/Text';
import {COLORS} from '../../shared/theme';
import ButtonComp from '../Button/ButtonComp';
import {styles} from './Styles';
import ArrowRight from '../../assets/svgs/ArrowRight';
import { GooglePayment } from '../../helpers/GooglePayment';

const PlanData = ({
  iconStaric,
  headerText,
  price,
  description,
}) => {
  const {payWithGPayAction} = GooglePayment()
  const getPlanBtnAction = ()=>{
   payWithGPayAction(price)
  }
  
  return (
    <View style={styles.headFlatList}>
      <View style={styles.headComponent}>
        {iconStaric}
        <Text18
          textStyle={{
            marginTop: hp('1%'),
            color: COLORS.black,
          }}>
          {headerText}
        </Text18>
        <Text12 textStyle={{color: COLORS.lightGrey}}>
          {description}
        </Text12>
        <View style={styles.headTxtPrice}>
          <Text style={styles.txtDollarSign}>$</Text>
          <Text style={styles.txtPrice}>{price} </Text>
        </View>
        <Text12 textStyle={{color: COLORS.lightGrey1}}>per seat /session</Text12>
        <ButtonComp
          onPress={getPlanBtnAction}
          btnStyle={styles.btnStyle}
          txtStyle={styles.txtStyle}
          text={'Get a Plan'}
          icon={<ArrowRight />}
        />
      </View>
    </View>
  );
};

export default PlanData;
