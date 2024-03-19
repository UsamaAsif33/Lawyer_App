import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../assets/svgs/Back';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import TextInputWithSearch from '../../components/TextInputWithSearch/TextInputWithSearch';
import Search from '../../assets/svgs/Search';
import FilterComponent from '../../components/filterComponent/FilterComponent';
import JobInformation from "../../components/HomeFlatlistComponent'/jobInformation/JobInformation";
import {Paths} from '../../assets/images/imagesPath/Path';
import HomeModal from '../../components/modal/homeScreenModal/HomeModal';
import {navigate} from '../../navigation/rootNavigation';
import {useFocusEffect} from '@react-navigation/native';
import { getMyJobsReq } from '../../redux/userJob/UserJobActions';

const MyJob = () => {
  const [display, setDisplay] = useState(false);
  let myJobReq = useSelector(state => state?.userJob?.myJob)
  const dispatch = useDispatch();
  const Userjob = () => {
    dispatch(getMyJobsReq());
  };
  useFocusEffect(
    React.useCallback(() => {
      Userjob();
    }, []),
  );
  return (
    <View style={styles.container}>
      <MainHeader text={'My Jobs'} back={<Back />} />
      <View style={styles.mainHead}>
        <HorizontalView>
          <TextInputWithSearch name="Search" iconSvg={<Search />} />
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
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatlistHeight}
          data={myJobReq?.jobs?.docs}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <JobInformation
              image={Paths.JobImage}
              jobName={item?.job?.name}
              address={`${item?.job?.category?.name} ${item?.job?.country?.name}, ${item?.job?.city?.name}`}
              icon={item.icon}
              specification={item?.job?.description}
              onPress={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
};
export default MyJob;
