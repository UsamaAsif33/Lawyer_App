import {View, Image, FlatList, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Styles';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import TextInputWithSearch from '../../components/TextInputWithSearch/TextInputWithSearch';
import Search from '../../assets/svgs/Search';
import FilterComponent from '../../components/filterComponent/FilterComponent';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import {Text14, Text20} from '../../components/Text/Text';
import CreateButton from "../../components/HomeFlatlistComponent'/createButton/CreateButton";
import JobInformation from "../../components/HomeFlatlistComponent'/jobInformation/JobInformation";
import {Paths} from '../../assets/images/imagesPath/Path';
import {HomeButtonData, HomeJobItems} from '../../assets/dummyData/DummyData';
import HomeModal from '../../components/modal/homeScreenModal/HomeModal';
import {navigate} from '../../navigation/rootNavigation';
import {useFocusEffect} from '@react-navigation/native';
import {
  jobCategoriesAction,
  usersJobAction,
} from '../../redux/userJob/UserJobActions';
import { COLORS } from '../../shared/theme';

const Home = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [SelectedAll, setSelectedAll] = useState(false);
  const [display, setDisplay] = useState(false);
  let homeData = useSelector(state => state?.userJob);
  const isLoading = homeData?.status == 'loading' ? true : false;
  const dispatch = useDispatch();
  const AdminJob = (categoryId) => {
    dispatch(usersJobAction({textInputValue,categoryId}));
  };
  let jobData = useSelector(state => state.userJob.jobCategory);
    const CategoryAction = () => {
    dispatch(jobCategoriesAction());
  };
  useFocusEffect(
    React.useCallback(() => {
      AdminJob();
      CategoryAction();
    }, []),
  );
  return (
    <View style={styles.container}>
      <MainHeader content={Paths.imageHead} type="image" />
      <View style={styles.mainHead}>
        <HorizontalView>
          <TextInputWithSearch
            name="Search"
            iconSvg={<Search />}
            value={textInputValue}
            onChangeText={e => {
              setTextInputValue(e);
            }}
            onSubmitEditing={() => {
              AdminJob();
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
        <Image
          resizeMode="contain"
          style={styles.imageHead}
          source={Paths.imageBackground}
        />
      </View>
      <View style={styles.FlatlistHead}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={jobData}
          keyExtractor={(index, item) => item + index.toString()}
          renderItem={({item}) => (
            <CreateButton
              text={item?.name}
              isSelected={SelectedAll == item?.name ? true : false}
              onPress={() => {
                setSelectedAll(item?.name);
                AdminJob(item?._id);
              }}
            />
          )}
        />
      </View>
      <View style={styles.headJobsView}>
        <Text20 textStyle={styles.txtJobs}>Jobs</Text20>
        <TouchableOpacity>
          <Text14 textStyle={styles.txtView}>View all</Text14>
        </TouchableOpacity>
      </View>
      {
      isLoading ?  
      <ActivityIndicator size={50} color={COLORS?.black}/>
      :
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.FlatlistHeight}
        data={homeData?.job?.docs}
        keyExtractor={(index, item) => item + index.toString()}
        renderItem={({item}) => (
          <JobInformation
            image={Paths.JobImage}
            jobName={item?.job?.name}
            address={`${item?.job?.category?.name} ${item?.job?.country?.name}, ${item?.job?.city?.name}`}
            icon={item.icon}
            specification={item?.job?.description}
            onPress={() => {
              // navigate('AdditionScreenStack', {
              //   screen: 'Addition',
              //   params: {item: item},
              // });
            }}
          />
        )}
      />
      }
    </View>
  );
};
export default Home;
