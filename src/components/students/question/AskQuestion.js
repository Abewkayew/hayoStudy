import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


import { withNavigation } from 'react-navigation';
import TitleHeader from '../../common/TitleHeader';
import CommonButton from '../../common/CommonButton';

const AskQuestion = (props) => {
  return (
    <>
    <TitleHeader title='Ask Question' iconName='arrow-left'/>
    <View style={styles.container}> 
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Text style={styles.textStyle}>Write your question in such a way experts understands very well</Text>
          <Input
            placeholder='Write your question...'
            multiline = {true}
            numberOfLines = {10}
          />
          <TouchableOpacity style={styles.styleButtons}>
              <Icon type="font-awesome" size={30} color='#fff' name='image'
               style={styles.iconStyle}/>
          </TouchableOpacity>
      </View>
    </View>
    <CommonButton textValue='Ask' navigateTo="Home"/>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      paddingVertical: 12,
    },
    bottomNav: {
      marginTop: 80
    },
    iconStyle: {
      marginVertical: 20,
      marginHorizontal: 5
    },
    styleButtons: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: '#1c396d'
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default withNavigation(AskQuestion);
