import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './Styles';
import Back from '../../../assets/svgs/Back';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import {Text12, Text13, Text14, Text16, Text24} from '../../../components/Text/Text';
import {COLORS} from '../../../shared/theme';
import VisaCard from '../../../assets/svgs/VisaCard';
import MasterCard from '../../../assets/svgs/MasterCard';
import HorizontalView from '../../../components/horizontalView/HorizontalView';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import Secure from '../../../assets/svgs/Secure';
import ButtonComp from '../../../components/Button/ButtonComp';
import Medal from '../../../assets/svgs/Medal';

const PaymentCardDetail = () => {
  return (
    <View style={styles.container}>
      <AuthHeader icon={<Back />} />
      <View style={styles.headcomponent}>
        <HorizontalView marginTop={hp('6%')}>
          <Text14 textStyle={{fontWeight: 500, color: COLORS.black}}>
            Pay with Credit/Debit Card
          </Text14>
          <HorizontalView>
            <VisaCard />
            <MasterCard />
          </HorizontalView>
        </HorizontalView>
        <TextInputWithIcon name={'Card Number'} marginTop={hp('5%')} />
        <TextInputWithIcon name={'Name on Card'} />
        <TextInputWithIcon name={'mm/yy'}  />
        <TextInputWithIcon name={'CVC'}  />
        <HorizontalView marginTop={8} width={wp('63%')}>
          <Secure />
          <Text12 textStyle={{fontWeight:400}}>Guaranteed Safe and Secure Checkout </Text12>
        </HorizontalView>
        <ButtonComp
          text={'Pay Now'}
          btnStyle={styles.btnStyle}
          txtStyle={styles.txtStyle}
        />
        {/* For Congratulation
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Medal />
          <Text24
            textStyle={{fontWeight: 700, marginTop: 32, color: COLORS.primary}}>
            Successfully Registered
          </Text24>
          <Text16 textStyle={{color: COLORS.darkBlack}}>
            We are Verifying your account.
          </Text16>
        </View> */}
      </View>
    </View>
  );
};

export default PaymentCardDetail;
