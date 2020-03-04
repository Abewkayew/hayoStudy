
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';

import UserAvatar from './UserAvatar'
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class AuthorRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      followValue: "Follow",
      borderColor: '#808080',
    }

  }


  handleFollow(){
    this.setState({
      followValue: "Following",
      borderColor: '#fff'
    })
  }

  render(){
    const { content, avatarSize, showAvatar, showFollow } = this.props;
    const { followValue, borderColor } = this.state;

    return (
      <>
       {
         showAvatar ? (
          <UserAvatar fullName={content.fullName} avatarSize={avatarSize}/>
         ): (
       <View style={styles.container}>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDetail', {
              fullName: content.fullName,
              town: 'Wosha',
              profilePhoto: 'https://randomuser.me/api/portraits/women/85.jpg',
              verified: false,
              educationLevel: 'University Lecturer',
              school: 'Addis Ababa University',
              experiexpertiseType: 'Software Engineer',
              previousExperience: 'Worked as asistant Lecturer in Adama University',
              about: 'I am software engineer here from Addis Ababa University. I have alot more experiences in this field as a software Engineer. '
            })}>
              <View style={styles.containUser}>              
                  <UserAvatar fullName={content.fullName} avatarSize={avatarSize}/>
                  <View style={styles.containUserInfo}>
                    <Text style={styles.nameStyle}>{content.fullName}</Text>
                    <Text style={styles.time}>{content.date}</Text>
                  </View>
              {
                content.verified ? (
                  <FontAwesomeIcon style={styles.iconStyle} name="check-circle" size={16} color="#27597b"/>
                ) : ( null )
              }
              </View>
          </TouchableOpacity>
          
          {
            showFollow && (
              <TouchableOpacity onPress={() => this.handleFollow()} 
                style={[styles.followButton, {borderColor: borderColor}]}>
                <Text style={styles.followText}>{followValue}</Text>
              </TouchableOpacity>
            )
          }    

        </View>
         )
       }
      </>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        paddingHorizontal: 3,
        justifyContent: 'space-between',
    },
    text: {
        textAlign: "center"
    },
    time: {
        fontSize: 11,
        marginLeft: 5,
        color: '#808080',
    },
    containUser: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    containUserInfo: {
      marginHorizontal: 10
    },
    nameStyle: {
        fontSize: 17,
    },
    iconStyle: {
      marginVertical:5
    },
    followText: {
       color: '#27597b',
       fontSize: 16,
       fontWeight: '600',
       marginHorizontal: 5,
       paddingHorizontal: 5,
       paddingVertical: 2
    },
    followButton: {
      borderWidth: 1,
      borderRadius: 3
    }
});

export default withNavigation(AuthorRow);
