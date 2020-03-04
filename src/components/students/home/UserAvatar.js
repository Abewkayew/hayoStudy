
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
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserAvatar = (props) => {

  let testName = 'Abebe Kayimo';
  const {avatarSize, fullName, bgColor} = props;
  const firstLetter = fullName.charAt(0).toUpperCase();
  const fullNameInArray = fullName.split(' ');
  const secondName =   fullNameInArray[fullNameInArray.length - 1]
  const secondLetter = secondName.charAt(0).toUpperCase();
  
  const defaultColor = '#f80';

  const handleAvatarClick = () => {
    console.log("It works")
  }

  let backgroundColor = '#f80';

  let charAtoE = ['F', 'G', 'L', 'D', 'Y'];
  let charFtoJ = ['A', 'B', 'H', 'X', 'J'];
  let charKtoO = ['K', 'C', 'W', 'N', 'O'];
  let charPtoT = ['P', 'Q', 'R', 'S', 'T'];
  let charUtoZ = [ 'U','V', 'M', 'I', 'E', 'Z'];

  if(charAtoE.includes(firstLetter)){
    backgroundColor = '#27597b'
  } else if(charFtoJ.includes(firstLetter)){
    backgroundColor = '#16354a'
  } else if(charKtoO.includes(firstLetter)){
    backgroundColor = '#2aa4f7'
  } else if(charPtoT.includes(firstLetter)){
    backgroundColor = '#084d24'
  }else if(charUtoZ.includes(firstLetter)){
    backgroundColor = '#4e2bed'
  }

  return (
    <>
      <View>
        {/* <Avatar
          size={avatarSize}
          rounded
          title={firstLetter + secondLetter}
          activeOpacity={0.1}
          containerStyle={{marginLeft: 2, marginTop: 1}}
        /> */}
        <TouchableOpacity
          style={[styles.avatarContainer, {backgroundColor: backgroundColor}]}
          onPress={() => handleAvatarClick() }>
          <Text style={styles.avatarText}>{firstLetter}{secondLetter}</Text>
        </TouchableOpacity>
      </View>     
    </>
  );
};

const styles = StyleSheet.create({
    avatarContainer: {
       width: 35,
       height: 35,
       borderRadius: 50,
       alignItems: 'center',
       padding: 5,
    },
    avatarText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 16,
      paddingTop: 2,
      alignSelf: 'center',
    }
});

export default UserAvatar;