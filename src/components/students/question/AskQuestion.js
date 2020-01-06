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

const AskQuestion = (props) => {
  return (
    <>
    <TouchableOpacity onPress={() => props.navigation.goBack() }>
         <Text style={{alignSelf: 'center', marginVertical: 20, 
         backgroundColor: '#1c396d', color: 'white', paddingHorizontal: 20,
         paddingVertical: 5}}>Go back</Text>
     </TouchableOpacity>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Text style={styles.textStyle}>Ask Quetion</Text>
        <Icon type="font-awesome" size={30} color='#1c396d' name='question-circle' style={{marginVertical: 20, marginHorizontal: 5}}/>
    </View>

<Input
  placeholder='INPUT WITH ICON'
  multiline = {true}
  numberOfLines = {10}
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>
<Icon type="font-awesome" size={50} color='#1c396d' name='image' style={{marginVertical: 20, marginHorizontal: 5}}/>



    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 20,
    },
    bottomNav: {
      marginTop: 80
    },
    styleButtons: {
        width: 120,
        height: 130,
        paddingVertical: 30,
        marginVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: '#1c396d'
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default withNavigation(AskQuestion);
