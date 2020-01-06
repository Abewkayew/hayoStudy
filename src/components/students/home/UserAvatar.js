
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Avatar } from "react-native-elements";

const UserAvatar = (props) => {

  const firstLetter = props.fullName.charAt(0).toUpperCase();
  const {avatarSize} = props;

  return (
    <>
      <View>
        <Avatar
          size={avatarSize}
          rounded
          title={firstLetter}
          activeOpacity={0.1}
          containerStyle={{marginLeft: 2, marginTop: 1}}
        />
      </View>     
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default UserAvatar;