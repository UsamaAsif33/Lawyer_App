import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import HorizontalView from '../../horizontalView/HorizontalView';
import SelectorOn from '../../../assets/svgs/SelectorOn';
import SelectorOff from '../../../assets/svgs/SelectorOff';
import DropdownBottomIcon from '../../../assets/svgs/DropdownBottomIcon';
import { Text13, Text14, Text20 } from '../../Text/Text';
import ButtonComp from '../../Button/ButtonComp';
import { styles } from './Styles';
import Cross from '../../../assets/svgs/Cross';
import TextInputWithIcon from '../../textInputWithIcon/TextInputWithIcon';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const HomeModal = (props) => {
    const [location, setLocation] = useState('Search by Location');
    const [locationArea, setLocationArea] = useState(false);
    const [category, setCategory] = useState('Search by Category');
    const [categoryArea, setCategoryArea] = useState(false);
    const [date, setDate] = useState('Search by Date');
    const [dateArea, setDateArea] = useState(false);
    const Data = [
      {label: 'Bankruptcy', value: 'Bankruptcy.'},
      {label: 'Business', value: 'Business'},
      {label: 'Property', value: 'Property'},
    ];
    const [jobselector, setJobSelector] = useState(false);
    const [lawyerselector, setLawyerSelector] = useState(false);

  return (
    <View>
      <Modal transparent={props?.transparent} visible={props?.visible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHead}>
              <View style={styles.FilterLine}>
                <HorizontalView>
                  <Text20 textStyle={styles.ModalTxtFIlter}>Filter</Text20>
                  <TouchableOpacity
                    onPress={() => {
                      props?.setDisplay(false);
                    }}>
                    <Cross />
                  </TouchableOpacity>
                </HorizontalView>
              </View>
              <View style={styles.ModalPadding}>
                <View style={styles.ModalWidth}>
                  <HorizontalView style={styles.JobGap}>
                    <HorizontalView style={styles.LawyerGap}>
                      <TouchableOpacity
                        onPress={() => {
                          setJobSelector(true);
                          setLawyerSelector(false);
                        }}>
                        {jobselector ? <SelectorOn /> : <SelectorOff />}
                      </TouchableOpacity>
                      <Text14 textStyle={styles.RadioTxtColor}>Jobs</Text14>
                    </HorizontalView>
                    <HorizontalView style={styles.LawyerGap}>
                      <TouchableOpacity
                        onPress={() => {
                          setJobSelector(false);
                          setLawyerSelector(true);
                        }}>
                        {lawyerselector ? <SelectorOn /> : <SelectorOff />}
                      </TouchableOpacity>
                      <Text14 textStyle={styles.RadioTxtColor}>Lawyers</Text14>
                    </HorizontalView>
                  </HorizontalView>
                </View>
                <Text14 textStyle={styles.FilterTxtComponent}> Name</Text14>
                <TextInputWithIcon
                  marginTop={heightPercentageToDP('0.5%')}
                  name={'Search by Name'}
                />
                <Text14 textStyle={styles.FilterTxtComponent}> Category</Text14>
                <TouchableOpacity
                  style={styles.DropdownTextHead}
                  onPress={() => {
                    setCategoryArea(!categoryArea);
                    setLocationArea(false);
                    setDateArea(false);
                  }}>
                  <Text13 textStyle={styles.SearchCategoryTxt}>
                    {category}
                  </Text13>
                  <DropdownBottomIcon />
                </TouchableOpacity>
                {categoryArea ? (
                  <View style={styles.DropdownArea}>
                    <FlatList
                      data={Data}
                      renderItem={({item, index}) => {
                        console.log(item);
                        return (
                          <TouchableOpacity
                            style={styles.LocationItem}
                            onPress={() => {
                              setCategory(item.value);
                              setCategoryArea(false);
                            }}>
                            <Text13 textStyle={styles.DropdownText}>
                              {item.value}
                            </Text13>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                ) : null}
                <Text14 textStyle={styles.FilterTxtComponent}> Location</Text14>
                <TouchableOpacity
                  style={styles.DropdownTextHead}
                  onPress={() => {
                    setLocationArea(!locationArea);
                    setCategoryArea(false);
                    setDateArea(false);
                  }}>
                  <Text13 textStyle={styles.SearchCategoryTxt}>
                    {location}
                  </Text13>
                  <DropdownBottomIcon />
                </TouchableOpacity>
                {locationArea ? (
                  <View style={styles.DropdownArea}>
                    <FlatList
                      data={Data}
                      renderItem={({item, index}) => {
                        console.log(item);
                        return (
                          <TouchableOpacity
                            style={styles.LocationItem}
                            onPress={() => {
                              setLocation(item.value);
                              setLocationArea(false);
                            }}>
                            <Text13 textStyle={styles.DropdownText}>
                              {item.value}
                            </Text13>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                ) : null}
                <Text14 textStyle={styles.FilterTxtComponent}>Start Date</Text14>
                <TextInputWithIcon
                  marginTop={heightPercentageToDP('0.5%')}
                  name={'Search by Start Date'}
                />
                <Text14 textStyle={styles.FilterTxtComponent}>End Date</Text14>
                <TextInputWithIcon
                  marginTop={heightPercentageToDP('0.5%')}
                  name={'Search by End Date'}
                />
                
                <HorizontalView>
                  <ButtonComp
                    text={'Reset All'}
                    btnStyle={styles.BtnHeadResetAll}
                    txtStyle={styles.BtnTxtResetAll}
                  />
                  <ButtonComp
                    text={'Apply'}
                    btnStyle={styles.BtnHeadApply}
                    txtStyle={styles.BtnTxtApply}
                  />
                </HorizontalView>
              </View>
            </View>
          </View>
        </Modal>
    </View>
  )
}

export default HomeModal;