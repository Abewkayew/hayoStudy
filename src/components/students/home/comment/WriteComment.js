import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  TouchableHighlight
} from 'react-native';

import {Card, Input } from 'react-native-elements';

import UserAvatar from '../UserAvatar';
import UserInput from './UserInput';

const WriteComment = (props) => {
  const {fullName, avatarSize, showAvatar} = props;
  return (
    <>
      <View style={[styles.container, {flexDirection: showAvatar ? 'row' : 'column'}]}>
          {
            showAvatar && (
              <UserAvatar fullName={fullName} avatarSize={avatarSize}/>
            )
          }
          <UserInput placeHolder='Write a comment...' height={70}/>
      </View>
    </>    
  );
};

const styles = StyleSheet.create({    
    container: {
        marginVertical: 10
    },
    styleTytle: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 10
    }
});

export default WriteComment;
