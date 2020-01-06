
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';

import UserAvatar from './UserAvatar'

class AuthorRow extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    const {blog} = this.props;
    const avatarSize = "medium";
    return (
      <>
       <View style={styles.container}>
          <View style={styles.containUser}>
            <UserAvatar fullName={blog.fullName} avatarSize={avatarSize}/>
            <View style={styles.containUserInfo}>
              <Text style={styles.nameStyle}>{blog.fullName}</Text>
              <Text style={styles.time}>{blog.date}</Text>
            </View>
          </View>
          {
            blog.verified ? (
              <FontAwesomeIcon style={styles.iconStyle} name="check-circle" size={16} color="#27597b"/>
            ) : ( null )
          }
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    },
    time: {
        fontSize: 10,
        marginLeft: 5
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
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        paddingHorizontal: 3,
        justifyContent: 'flex-start',
    },
    iconStyle: {
      marginVertical:5
    }
});

export default AuthorRow;
