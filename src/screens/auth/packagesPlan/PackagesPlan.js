import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {UIActivityIndicator}  from 'react-native-indicators'

import {styles} from './Styles';
import AuthHeader from '../../../components/authHeader/AuthHeader';
import Back from '../../../assets/svgs/Back';
import {COLORS} from '../../../shared/theme';
import {Text16} from '../../../components/Text/Text';
import PlanData from '../../../components/packagesPlanComponent/PlanData';
import Staric from '../../../assets/svgs/Staric';
import {getSubscriptionsAction} from '../../../redux/authentication/AuthActions';

const PackagesPlan = () => {
  const [isSelected, setIsSelected] = useState('Monthly');
  const dispatch = useDispatch();

  // GET SUBSCRIPTION API CALLING 
  useFocusEffect(
    React.useCallback(() => {
      GetSubscriptions();
    }, []),
  );

  let subscriptionPlanData = useSelector(state => state?.auth?.buyPlanData);
  const isLoading = useSelector(state => state?.auth?.status)


  const subscriptionData = subscriptionPlanData?.data?.filter(item => {
    return item?.plan == isSelected;
  });

  const GetSubscriptions = () => {
    dispatch(getSubscriptionsAction());
  };

  const YearlySelected = () => {
    setIsSelected('Yearly');
  };

  const MonthlySelected = () => {
    setIsSelected('Monthly');
  };

  return (
    <View style={styles.container}>
      <AuthHeader icon={<Back />} />

     {isLoading == 'loading' ?
       <View
       style={styles.loaderStyle}>
       <UIActivityIndicator color={COLORS.blue} size={80}  />
     </View> 
     :
      <View style={styles.headcomponent}>
        <View style={styles.headBtnMonthlyYearly}>
          <View style={styles.headBtnYearly}>
            <TouchableOpacity onPress={YearlySelected}>
              <Text16
                textStyle={[
                  styles?.btnTxt,
                  {
                    backgroundColor:
                      isSelected == 'Yearly' ? COLORS.primary : null,
                    color:
                      isSelected == 'Yearly' ? COLORS.white : COLORS.lightBlack,
                  },
                ]}>
                Yearly
              </Text16>
            </TouchableOpacity>
            <TouchableOpacity onPress={MonthlySelected}>
              <Text16
                textStyle={[
                  styles?.btnTxt,
                  {
                    backgroundColor:
                      isSelected == 'Monthly' ? COLORS.primary : null,
                    color:
                      isSelected == 'Monthly'
                        ? COLORS.white
                        : COLORS.lightBlack,
                  },
                ]}>
                Monthly
              </Text16>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={subscriptionData}
          keyExtractor={(item,index) => item?.price + index}
          renderItem={({item}) => (
            <PlanData
              iconStaric={<Staric />}
              headerText={item?.name}
              description={item?.description}
              price={item?.price}
            />
          )}
        />
      </View>
      }
    </View>
  );
};
export default PackagesPlan;
