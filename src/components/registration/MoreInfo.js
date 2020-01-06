import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';

import {Card, Button, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';



const MoreInfo = (props) => {
  const colors = {menuColor: '#fff', profileColor: '#fa5a4a', favoriteColor: '#fff'}
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer}
          >
        <Icon
            name='user'
            type='font-awesome'
            color='#fff'
            size={50}
            onPress={() => {}}
            containerStyle={{ marginHorizontal: 16 }}
          />
        </TouchableOpacity>
        <Input
            placeholder='A short description about yourself'
            multiline = {true}
            numberOfLines = {4}
            />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('SuccessRegistration') } 
           style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Next</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
     },
     imageContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#1c396d',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal: 30,
        borderColor: '#f80',
        borderWidth: 2
     },
     textStyle: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        marginVertical: 10
    },
    buttonStyle: {
      justifyContent: 'center',
      borderRadius: 15,      
      borderBottomWidth: 1,
      borderWidth: 1,
      borderColor: '#1c396d',
      marginHorizontal: 10,
      marginBottom: 40
    }
});

export default withNavigation(MoreInfo);
