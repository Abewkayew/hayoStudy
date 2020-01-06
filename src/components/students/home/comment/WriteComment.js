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
  const fullName = "Milkias Tonji"
  const avatarSize = "small";
  return (
    <>
      <View style={styles.container}>
          <UserAvatar fullName={fullName} avatarSize={avatarSize}/>
          <UserInput/>
      </View>
    </>    
  );
};

const styles = StyleSheet.create({    
    container: {
        flexDirection: 'row',
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
