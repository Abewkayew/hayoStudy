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

import UserInput from '../home/comment/UserInput';

const WriteAnswer = (props) => {
  return (
    <>
      <View style={styles.container}>
          <UserInput placeHolder='Provide your answer...'/>
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

export default WriteAnswer;
