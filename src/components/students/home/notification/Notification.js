
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleHeader from '../../../common/TitleHeader';
import BottomNavigation from '../BottomNavigation';
import UserAvatar from '../UserAvatar';

import { notifications } from '../../../../utils/mock_data/data'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class Notification extends React.Component{
  constructor(props){
    super(props);
  }

  handleNotificationClick = (notification) => {
    const { navigation } = this.props;
    const { type } = notification;
    switch(type){
      case 'tutorial': 
        navigation.navigate('UserTutorial', {
          tutorialContent: notification
        })
        console.log("TU")
      case 'answer': 
        navigation.navigate('UserAnswer', {
          answerContent: notification
        })
      case 'question':
        navigation.navigate('UsersQuestion', {
          questionContent: notification
        })
      case 'scholarship': 
        navigation.navigate('UserScholarship', {
          scholarshipContent: notification
        })
      case 'requestContribution':
        navigation.navigate('UserInvitation', {
          invitationContent: notification
        })
      
    }
  }

  render(){
    const colors = {menuColor: '#fff', profileColor: '#fff', favoriteColor: '#fff', notificationColor: '#f80'}
    const headerProps = {
      title: 'Notification',
      iconName: 'arrow-left',
      showRightOption: true
    }  
    const avatarProps = {
        avatarSize: 'small',
        fullName: 'Aynalem Ashiro',
    }
    return (
      <>
        <TitleHeader {...headerProps}/>
        <View style={styles.container}>
        <ScrollView>
          {
                  notifications.map((notification, index) => {
                      return(
                          <TouchableNativeFeedback
                            onPress={() => this.handleNotificationClick(notification)}
                            key={index}>
                            <View style={styles.notification}>
                                <UserAvatar {...avatarProps}/>
                                <View style={styles.userHeader}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.userInfo}>{notification.userTitle}</Text>
                                    <Text style={styles.date}>.{notification.date}</Text>
                                </View>
                                <Text style={styles.title}>{notification.title}</Text>
                                <Text>{notification.upvotes} students upvoted this tutorial</Text>
                                </View>   
                            </View> 
                          </TouchableNativeFeedback>   
                      )
                  })
              }
        </ScrollView>

        </View>
        <View style={styles.bottomNav}>
          <BottomNavigation {...colors}/>
        </View>
      </>
    );
  };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 5,
      paddingBottom: 80,
    },
    notification: {
      backgroundColor: '#f0f0ed',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      marginVertical: 5
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    userHeader: {
      marginHorizontal: 10
    },
    userInfo: {
        color: '#808080',
    },
    date: {
        color: '#808080',
        marginHorizontal: 5
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    }
});

export default withNavigation(Notification);
