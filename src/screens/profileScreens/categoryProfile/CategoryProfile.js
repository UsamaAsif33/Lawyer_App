import {View, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import MainHeader from '../../../components/mainScreensHeader/MainHeader';
import {styles} from './Styles';
import Back from '../../../assets/svgs/Back';
import {Text14, Text20} from '../../../components/Text/Text';
import TextInputWithIcon from '../../../components/textInputWithIcon/TextInputWithIcon';
import ButtonComp from '../../../components/Button/ButtonComp';
import {navigate} from '../../../navigation/rootNavigation';

const CategoryProfileSchema = Yup.object({
  category: Yup.string()
  .required('Category is required'),
  group: Yup.string()
  .required('Group is required'),
  article: Yup.string()
  .required('Article is required'),
})
const CategoryProfile = () => {
  return (
    <View style={styles.container}>
      <MainHeader text={'Profile'} back={<Back />} />
      <View style={styles.mainHead}>
      <Formik
          initialValues={{
            category: '',
            group:'',
            article:'',
          }}
          validationSchema={CategoryProfileSchema}
          onSubmit={() => {
            navigate('AddressProfile');
          }}>
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldTouched,
          }) => (
            <>
        <Text20 textStyle={styles.txtCreateProfile}>Create Profile</Text20>

        <Text14 textStyle={styles.headingTxt}>Category</Text14>
        <TextInputWithIcon 
        marginTop={8} 
        name={'Enter Category'} 
        value={values.category}
        onChangeText={handleChange('category')}
        onBlur={() => setFieldTouched('category')}
      />
      {touched.category && errors.category && (
        <Text style={styles.ErrorMsgStyle}>{errors.category}</Text>
      )}
        <Text14 textStyle={styles.headingTxt}>Group</Text14>
        <TextInputWithIcon 
        marginTop={8} 
        name={'Enter Group'} 
        value={values.group}
        onChangeText={handleChange('group')}
        onBlur={() => setFieldTouched('group')}
      />
      {touched.group && errors.group && (
        <Text style={styles.ErrorMsgStyle}>{errors.group}</Text>
      )}
        <Text14 textStyle={styles.headingTxt}>Article</Text14>
        <TextInputWithIcon 
        marginTop={8} 
        name={'Enter Article'} 
        value={values.article}
        onChangeText={handleChange('article')}
        onBlur={() => setFieldTouched('article')}
      />
      {touched.article && errors.article && (
        <Text style={styles.ErrorMsgStyle}>{errors.article}</Text>
      )}
        <ButtonComp
          onPress={handleSubmit}
          text={'Next'}
          btnStyle={styles.ButtonComp}
          txtStyle={styles.TxtBtnComp}
        />
        </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default CategoryProfile;
