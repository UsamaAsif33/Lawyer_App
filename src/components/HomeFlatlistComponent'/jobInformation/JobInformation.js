import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text12, Text13, Text18} from '../../Text/Text';
import JobEye from '../../../assets/svgs/JobEye';
import {styles} from './Styles';
import { navigate } from '../../../navigation/rootNavigation';

const JobInformation = ({
  status,
  Progrestext,
  image,
  jobName,
  address,
  specification,
  backgroundColor,
  color,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.headBelow}>
          <Image source={image} />
          <View style={styles.headText}>
            <Text18 textStyle={styles.txtJobName}>{jobName}</Text18>
            <Text12 textStyle={styles.txtAddress}>{address}</Text12>
          </View>
        </View>
        <TouchableOpacity onPress={onPress}
         style={styles.headJobEye}>
          <JobEye />
        </TouchableOpacity>
      </View>
      <Text12 textStyle={styles.txtSpecification}>{specification}</Text12>
      {status && (
        <View
          style={{
            borderRadius: 6,
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            alignItems: 'center',
            borderColor:color,
            borderWidth:0.5,
            width: 107,
            padding: 5,
            marginTop: 10,
          }}>
          <Text13 textStyle={{color:color}}>{Progrestext}</Text13>
        </View>
      )}
    </View>
  );
};

export default JobInformation;
