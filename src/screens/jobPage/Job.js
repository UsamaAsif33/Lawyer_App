import {View, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../assets/svgs/Back';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import TextInputWithSearch from '../../components/TextInputWithSearch/TextInputWithSearch';
import Search from '../../assets/svgs/Search';
import FilterComponent from '../../components/filterComponent/FilterComponent';
import {Text14} from '../../components/Text/Text';
import JobInformation from "../../components/HomeFlatlistComponent'/jobInformation/JobInformation";
import {COLORS} from '../../shared/theme';
import {data} from '../../assets/dummyData/DummyData';
import {DataItems} from '../../assets/dummyData/DummyData';
import {Paths} from '../../assets/images/imagesPath/Path';
import HomeModal from '../../components/modal/homeScreenModal/HomeModal';
import { navigate } from '../../navigation/rootNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { jobUserGetReq } from '../../redux/userJob/UserJobActions';

const AllJobButton = props => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: props?.isSelected ? COLORS.white : null,
        borderRadius: 8,
      }}
      onPress={props?.onPress}>
      <Text14
        textStyle={{
          color: props?.isSelected ? COLORS.primary : COLORS.secondary,
        }}>
        {props.text}
      </Text14>
    </TouchableOpacity>
  );
};
const Job = () => {
  const [textInputValue, setTextInputValue] = useState('');
  let jobData = useSelector(state => state?.userJob);
  const isLoading = jobData?.status == 'loading' ? true : false;
  console.log("Loader...?",isLoading);
  const dispatch = useDispatch();
  const UserJob = () => {
    dispatch(jobUserGetReq(textInputValue));
  };
  useFocusEffect(
    React.useCallback(() => {
      UserJob();
    }, []),
  );
  const [display, setDisplay] = useState(false);
  const [isSelected, setIsSelected] = useState(1);
  const [isProgressState, setIsProgressState] = useState('');
  const acceptedListData = DataItems?.filter(item => {
    return item?.status == 'completed';
  });
  const inProgressListData = jobData?.job?.jobs?.docs?.filter(item => {
    return item?.status == 'in_progress';
  });
  const expiredListData = jobData?.job?.jobs?.docs?.filter(item => {
    return item?.status == 'expired';
  });
  return (
    <View style={styles.container}>
      <MainHeader text={'All Jobs'} back={<Back />} />
      <View style={styles.mainHead}>
        <HorizontalView>
          <TextInputWithSearch
           name="Search"
          iconSvg={<Search />}
          value={textInputValue}
          onChangeText={e => {
            setTextInputValue(e);
            UserJob();
          }}
        
         />
          <FilterComponent
            onPress={() => {
              setDisplay(true);
            }}
          />
        </HorizontalView>
        <HomeModal
          transparent={true}
          visible={display}
          setDisplay={setDisplay}
        />
        <HorizontalView style={styles.AllJobBtnHead}>
          {data.map(item => (
            <AllJobButton
              key={item.id}
              text={item.text}
              isSelected={isSelected == item?.id}
              onPress={() => {
                setIsSelected(item?.id);
                UserJob();
              }}
            />
          ))}
        </HorizontalView>
        <View style={styles.FlatListHead}>
          {
            isLoading?
            <ActivityIndicator size={50} color={COLORS?.black}/>
            :
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.FlatlistHeight}
            // keyExtractor={(index)=>{index}}
            data={
              isSelected == 1
                ? jobData?.job?.jobs?.docs
                : isSelected == 2
                ? acceptedListData
                : isSelected == 3
                ? inProgressListData
                : isSelected == 4
                ? expiredListData
                : DataItems
            }
            // keyExtractor={item => item.id}
            renderItem={({item}) => (
              // console.log("jobData.jobs?.docs ---------------",jobData.jobs?.docs),
              // console.log("item ---------------",item)
              <JobInformation
                key={item.id}
                image={item.image || Paths.JobImage}
                jobName={item?.job?.name}
                address={`${item?.job?.category?.name} ${item?.job?.country?.name}, ${item?.job?.city?.name}`}
                backgroundColor={
                  item?.status == 'completed'
                    ? COLORS.lightGreen
                    : item?.status == 'in_progress'
                    ? COLORS.lightYellow
                    : item?.status == 'expired'
                    ? COLORS.lightRed
                    : COLORS.grey
                }
                color={
                  item?.status == 'completed'
                    ? COLORS.green
                    : item?.status == 'in_progress'
                    ? COLORS.yellow01
                    : item?.status == 'expired'
                    ? COLORS.red
                    : COLORS.grey
                }
                icon={item.icon}
                specification={item?.job?.description}
                Progrestext={item?.status}
                status={'true'}
                isSelected={isSelected == item?.id}
                onPress={() => {
                  // setIsSelected(item?.id);
                  // setIsProgressState(item.Progrestext);
                  navigate('JobDetail');
                }}
              />
            )}
          />

          }
          
        </View>
      </View>
    </View>
  );
};
export default Job;
