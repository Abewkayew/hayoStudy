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
import { Avatar, Badge } from "react-native-elements";

import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';
import BottomNavigation from '../students/home/BottomNavigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import TitleHeader from '../common/TitleHeader';


const Profile = (props) => {
  const colors = {menuColor: '#fff', profileColor: '#f80', favoriteColor: '#fff', notificationColor: '#fff'}
  return (
    <>
      <TitleHeader title='Profile' iconName='arrow-left'/>
      <View style={styles.container}>
        <View style={styles.containEdit}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile') }
                style={styles.buttonStyle}>
                  <Icon
                    name='edit'
                    type='font-awesome'
                    color='#27597b'
                    size={25}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
            </TouchableOpacity>
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
          <Text
          style={{fontSize: 22, fontWeight: '700', marginVertical: 20, }}>
            Deribachew Barasa</Text>
       </View>

        <View style={styles.userInfo}>
              <View style={{marginHorizontal: 10}}>
                <Icon
                  name='graduation-cap'
                  type='font-awesome'
                  color='#27597b'
                  size={28}
                  onPress={() => {}}
                  containerStyle={{ marginTop: 20 }}
                />
              </View>
              <View style={styles.info}>
                  <Text style={styles.textStyle}>School</Text>
                  <Text style={styles.infoStyle}>Addis Ababa Institute</Text>
              </View>
        </View>
        <View style={styles.userInfo}>
          <View style={{marginHorizontal: 10}}>
            <Icon
                name='phone-square'
                type='font-awesome'
                color='#27597b'
                size={30}
                onPress={() => {}}
                containerStyle={{ marginTop: 20 }}
              />
            </View>
            <View style={styles.info}>
                <Text style={styles.textStyle}>Phone</Text>
                <Text style={styles.infoStyle}>+251955314116</Text>
            </View>

        </View>
        <View style={styles.userInfo}>
          <View style={{marginHorizontal: 10}}>
            <Icon
                name='building'
                type='font-awesome'
                color='#27597b'
                size={30}
                onPress={() => {}}
                containerStyle={{ marginTop: 20 }}
              />
            </View>
            <View style={styles.info}>
                <Text style={styles.textStyle}>Town</Text>
                <Text style={styles.infoStyle}>Hawassa</Text>
            </View>

        </View>

      </View>
      <View style={styles.bottomNav}>
        <BottomNavigation {...colors}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexWrap: 'wrap',
        marginHorizontal: 5,
     },
     textStyle: {
       fontSize: 18,
       fontWeight: '400',
       color: '#808080'
    },
    editTextStyle: {
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 5,
    },  
    infoStyle: {
      fontSize: 18,
      fontWeight: '700',
      textDecorationStyle: 'dotted',
      textShadowRadius: 3,
      textShadowColor: '#808080'
    },
    bottomNav: {
      marginTop: 80
    },
    containEdit: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    styleProfileContainer: {
      alignSelf: 'center',
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#f80'
    },
    userInfo: {
      flexDirection: 'row',
      marginVertical: 8,
      marginLeft: 10
    },
    info: {
       marginLeft: 10
    },
    buttonStyle: {
      borderRadius: 15,
      borderColor: '#1c396d',
      marginBottom: 2
    }
    
});

export default withNavigation(Profile);
