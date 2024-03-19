import {
  View,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../../shared/theme';
import {styles} from './Styles';
import {Text13, Text14, Text24} from '../../components/Text/Text';
import MainHeader from '../../components/mainScreensHeader/MainHeader';
import Back from '../../assets/svgs/Back';
import TextInputWithIcon from '../../components/textInputWithIcon/TextInputWithIcon';
import ButtonComp from '../../components/Button/ButtonComp';
import UploadIcon from '../../assets/svgs/UploadIcon';
import HorizontalView from '../../components/horizontalView/HorizontalView';
import Success from '../../assets/svgs/Success';
import Cross from '../../assets/svgs/Cross';
import DropdownBottomIcon from '../../assets/svgs/DropdownBottomIcon';
import {
  jobPostUserPostReq,
  jobPostedDetailGetReq,
  jobPostedTitleGetReq,
} from '../../redux/userJob/UserJobActions';
import {navigate} from '../../navigation/rootNavigation';

const PostJobsSchema = Yup.object({
  jobTitl: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Job Title must contain only letters')
    .required('Please enter your Job Title'),
  category: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Category must contain only letters')
    .required('Please enter your Category'),
  group: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Group must contain only letters')
    .required('Please enter your Group'),
  article: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Article must contain only letters')
    .required('Please enter your Article'),
  country: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Country must contain only letters')
    .required('Please enter your Country'),
  city: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'City must contain only letters')
    .required('Please enter your City'),
  areaName: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Area Name must contain only letters')
    .required('Please enter your Area Name'),
  building: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Building must contain only letters')
    .required('Please enter your Building'),
  branch: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Branch must contain only letters')
    .required('Please enter your Branch'),
  address: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Address must contain only letters')
    .required('Please enter your Address'),
  jobDescription: Yup.string()
    // .matches(/^[A-Za-z]+$/, 'Job Description must contain only letters')
    .required('Please enter your Job Description'),
  price: Yup.string().required('Please enter your Price'),
});

const Addition = () => {
  const [jobTitleArea, setJobTitleArea] = useState(false);
  const [JobTitleData, setJobTitleData] = useState([{label: '', value: ''}]);
  const [display, setDisplay] = useState(false);
  const [detailDisplay, setDetailDisplay] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  let homeData = useSelector(state => state.userJob);
  let detail = useSelector(state => state.userJob.jobDetail);

  const onJobDonePress = async payload => {
    try {
      const response = await dispatch(jobPostUserPostReq(payload));
      console.log('Response Data:', response.payload);
      setDisplay(true);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  const verifyData = () => {
    if (
      homeData?.job != null &&
      Array.isArray(homeData?.job) &&
      homeData?.job.length > 0
    ) {
      let data = homeData.job.map(el => ({label: el._id, value: el.name}));
      setJobTitleData(data);
      if (detailDisplay != '') {
        dispatch(jobPostedDetailGetReq(selectedId));
      }
    }
  };
  useEffect(() => {
    verifyData();
  }, [homeData?.job, detailDisplay]);
  const TitleJob = () => {
    dispatch(jobPostedTitleGetReq());
  };
  useFocusEffect(
    React.useCallback(() => {
      console.log('second');
      TitleJob();
    }, []),
  );
  return (
    <View style={styles.container}>
      <MainHeader text={'Post Jobs'} back={<Back />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            jobTitl: detailDisplay,
            category: detail?.category?.name,
            group: detail?.group?.name || '',
            article: detail?.article?.name || '',
            country: detail?.country?.name || '',
            city: detail?.city?.name || '',
            areaName: detail?.area?.name || '',
            building: detail?.building?.name || '',
            branch: detail?.branch?.name || '',
            address: detail?.address?.name || '',
            jobDescription: detail?.description || '',
            price: '',
          }}
          enableReinitialize={true}
          validationSchema={PostJobsSchema}
          onSubmit={values => {
            // console.log('asdf...',homeData?.job[0]._id);
            const payload = {
              job: homeData?.job[0]?._id,
              price: values.price,
            };
            onJobDonePress(payload);
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldTouched,
            setFieldValue,
          }) => (
            <>
              <View style={styles.headScrollView}>
                <View style={styles.headDropDown}>
                  <Text14 textStyle={styles.txttitle}>Job Title</Text14>

                  <TouchableOpacity
                    style={styles.DropdownTextHead}
                    onPress={() => {
                      setJobTitleArea(!jobTitleArea);
                    }}>
                    <Text13 textStyle={styles.SearchCategoryTxt}>
                      {values.jobTitl}
                    </Text13>
                    <DropdownBottomIcon />
                  </TouchableOpacity>
                  {jobTitleArea ? (
                    <View style={styles.DropdownArea}>
                      <FlatList
                        data={JobTitleData}
                        renderItem={({item, index}) => {
                          return (
                            <TouchableOpacity
                              style={styles.LocationItem}
                              onPress={() => {
                                setDetailDisplay(item?.value);
                                setSelectedId(item?.label);
                                setFieldValue('jobTitl', item?.value);
                                setJobTitleArea(false);
                              }}>
                              <Text13 textStyle={styles.DropdownText}>
                                {item?.value}
                              </Text13>
                            </TouchableOpacity>
                          );
                        }}
                      />
                    </View>
                  ) : null}
                </View>
                {touched.jobTitl && errors.jobTitl && (
                  <Text style={styles.ErrorMsgStyleLeftMargin}>
                    {errors.jobTitl}
                  </Text>
                )}
                <View style={styles.headMargin}>
                  <Text14 textStyle={styles.txttitle}>Category</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'Death Case'}
                    value={values.category}
                    onChangeText={handleChange('category')}
                    onBlur={() => setFieldTouched('category')}
                  />
                  {touched.category && errors.category && (
                    <Text style={styles.ErrorMsgStyle}>{errors.category}</Text>
                  )}
                  <Text14 textStyle={styles.txtTitleMargin}>Group</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'Death Case'}
                    value={values.group}
                    onChangeText={handleChange('group')}
                    onBlur={() => setFieldTouched('group')}
                  />
                  {touched.group && errors.group && (
                    <Text style={styles.ErrorMsgStyle}>{errors.group}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Article</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'Death Case'}
                    value={values.article}
                    onChangeText={handleChange('article')}
                    onBlur={() => setFieldTouched('article')}
                  />
                  {touched.article && errors.article && (
                    <Text style={styles.ErrorMsgStyle}>{errors.article}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Country</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'USA'}
                    value={values.country}
                    onChangeText={handleChange('country')}
                    onBlur={() => setFieldTouched('country')}
                  />
                  {touched.country && errors.country && (
                    <Text style={styles.ErrorMsgStyle}>{errors.country}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>City</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'New York'}
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={() => setFieldTouched('city')}
                  />
                  {touched.city && errors.city && (
                    <Text style={styles.ErrorMsgStyle}>{errors.city}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Area Name</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'East Downtown District'}
                    value={values.areaName}
                    onChangeText={handleChange('areaName')}
                    onBlur={() => setFieldTouched('areaName')}
                  />
                  {touched.areaName && errors.areaName && (
                    <Text style={styles.ErrorMsgStyle}>{errors.areaName}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Building</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'Downtown Hall'}
                    value={values.building}
                    onChangeText={handleChange('building')}
                    onBlur={() => setFieldTouched('building')}
                  />
                  {touched.building && errors.building && (
                    <Text style={styles.ErrorMsgStyle}>{errors.building}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Branch</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'Downtown Hallt'}
                    value={values.branch}
                    onChangeText={handleChange('branch')}
                    onBlur={() => setFieldTouched('branch')}
                  />
                  {touched.branch && errors.branch && (
                    <Text style={styles.ErrorMsgStyle}>{errors.branch}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>Address</Text14>
                  <TextInputWithIcon
                    marginTop={hp('1%')}
                    placeholderTextColor={COLORS.black01}
                    name={'New York, Tricon Building, 54430, USA'}
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={() => setFieldTouched('address')}
                  />
                  {touched.address && errors.address && (
                    <Text style={styles.ErrorMsgStyle}>{errors.address}</Text>
                  )}
                  <Text14 textStyle={styles.txtTitleMargin}>
                    Job Description
                  </Text14>
                  <TextInput
                    placeholderTextColor={COLORS.lightGrey4}
                    multiline={true}
                    placeholder="This is the one we talked about. HO states permits golorem ups talkedf about your HO This is the one we talked about. HO states permits golorem ups talkedf about your HO"
                    style={styles.DescriptionTextInput}
                    value={values.jobDescription}
                    onChangeText={handleChange('jobDescription')}
                    onBlur={() =>
                      setFieldTouched('jobDescription')
                    }></TextInput>
                  {touched.jobDescription && errors.jobDescription && (
                    <Text style={styles.ErrorMsgStyle}>
                      {errors.jobDescription}
                    </Text>
                  )}
                  <Text14 textStyle={styles.txtTitleMargin}>Price</Text14>
                  <TextInputWithIcon
                    keyboardType={'numeric'}
                    marginTop={hp('1%')}
                    name={'Enter Price'}
                    value={values.price}
                    onChangeText={handleChange('price')}
                    onBlur={() => setFieldTouched('price')}
                  />
                  {touched.price && errors.price && (
                    <Text style={styles.ErrorMsgStyle}>{errors.price}</Text>
                  )}

                  <Text14 textStyle={styles.txtTitleMargin}>File</Text14>
                  <ButtonComp
                    text={'Upload Document'}
                    icon={<UploadIcon />}
                    btnStyle={styles.ButtonCompWithIcon}
                    txtStyle={styles.TxtButtonCompWithIcon}
                  />
                  <HorizontalView>
                    <ButtonComp
                      text={'Delete'}
                      btnStyle={styles.ButtonComponent}
                      txtStyle={styles.TxtButtonComponent}
                    />
                    <ButtonComp
                      text={'Done'}
                      btnStyle={styles.HeadDoneTxt}
                      txtStyle={styles.TxtDone}
                      // onPress={() => {
                      //   setDisplay(true);
                      // }}
                      onPress={handleSubmit}
                    />
                  </HorizontalView>
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      <Modal transparent={true} visible={display}>
        <View style={styles.modalHead}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.headCross}
              onPress={() => {
                setDisplay(false);
              }}>
              <Cross />
            </TouchableOpacity>
            <View style={styles.headCenter}>
              <Success />
              <Text24 textStyle={styles.txtSuccessfully}>
                Job Post Successfully
              </Text24>
              <Text14 textStyle={styles.txtPosted}>
                Your job has been successfully posted
              </Text14>
              <ButtonComp
                text={'Done'}
                btnStyle={styles.ModalHeadDone}
                txtStyle={styles.ModalTxtDone}
                onPress={() => {
                  setDisplay(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Addition;
