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

const ParticipateLive = (props) => {
  return (
    <>
      <Text style={{fontWeight: '700', fontSize: 24}}>Welcome to Live competition...</Text>
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

export default withNavigation(ParticipateLive);
