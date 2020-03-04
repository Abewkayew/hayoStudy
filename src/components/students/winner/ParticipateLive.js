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

const ParticipateLive = (props) => {
  return (
    <>
      <TitleHeader iconName='arrow-left' title='Live Competition'/>
      <View style={styles.container}>
        <Text style={styles.styleCount}>253</Text>
        <Text style={{alignSelf: 'center', fontSize:16, marginVertical: 20}}>students registered so far for live competition</Text>
        <CommonButton navigateTo='Join' textValue='Join'/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        justifyContent: 'center',
        marginHorizontal: 10,
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 20,
    },
    bottomNav: {
      marginTop: 80
    },
    styleCount: {
      fontWeight: '700', 
      fontSize: 24,
      color: '#f80',
      alignSelf: 'center'
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

export default withNavigation(ParticipateLive);
