
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
import Header from '../home/Header';
import Home from './Home';

const Tutorial = () => {
  return (
    <>
      <Home/>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 15
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    }
});

export default withNavigation(Tutorial);
