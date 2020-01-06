
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native-gesture-handler'
import { Avatar } from "react-native-elements";


const EditProfile = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
            <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{marginVertical: 5}}>
            <Icon
                name='arrow-left'
                    type='font-awesome'
                color='#27597b'
                size={20}
                onPress={() => {}}
                containerStyle={{ marginTop: 20 }}
                />
            </TouchableOpacity>
            <Text style={styles.styleEdit}>Edit Profile</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.styleProfileContainer}>
            <Avatar
                size="large"
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                activeOpacity={0.1}
                containerStyle={{marginLeft: 2, marginTop: 1}}
              />  
          </TouchableOpacity>
            <TextInput
               placeholder='Full Name'
               placeholderTextColor="#f80"
               style={styles.inputStyle}
               />
            <TextInput
               placeholder='Phone number'
               placeholderTextColor="#f80"
               style={styles.inputStyle}
              />
            <TextInput
               placeholder='Education Level'
               placeholderTextColor="#f80"
               style={styles.inputStyle}
              />
            <TextInput
               placeholder='Town'
               placeholderTextColor="#808080"
               style={styles.inputStyle}
              />
            <TextInput
               placeholder='School Name'
               placeholderTextColor="#f80"
               style={styles.inputStyle}
             />
       </View>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('ParticipateLive') }
        style={styles.buttonStyle}>
        <Text style={styles.styleUpdateProfile}>Update Profile</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    editText: {
        fontSize: 20,
        fontWeight: '700'
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#808080',
        borderBottomWidth: .2,
        shadowRadius: 50,
        paddingVertical: 4,
        shadowColor: '#f80',
    },
    container: {
      flex: 1,
      marginHorizontal: 15,
      marginVertical: 10,
    },
    styleEdit: {
        marginLeft: 60,
        fontWeight: '700',
        fontSize: 16
    },
    buttonStyle: {
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1c396d',
        marginVertical: 20,
        marginHorizontal: 20
    },
    styleProfileContainer: {
      alignSelf: 'center',
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#f80',
      marginVertical: 5
    },
    styleUpdateProfile: {
        textAlign: 'center',
        fontSize: 18,
        paddingVertical: 12,
    },
    inputStyle: {
      alignSelf: 'stretch',
      borderRadius: 5,
      borderBottomWidth: 1,
      borderColor: '#27597b',
      height: 44,
      paddingHorizontal: 10,
      marginHorizontal: 5,
      marginBottom: 20,
    }
});

export default EditProfile;
