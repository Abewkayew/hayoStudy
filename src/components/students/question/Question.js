
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, Card } from 'react-native-elements';

import Header from '../home/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WriteAnswer from './WriteAnswer';
import { questions } from '../../../utils/mock_data/data'
import QuestionContent from './QuestionContent';
import Notice from '../home/Notice';


class Question extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        showAnswerInput: false
      }
  }

  render(){
    return (
        <>
          <Notice/>
          <Text style={styles.popular}>Popular Questions on HayoStudy</Text>
          <QuestionContent questions={questions}/>            
        </>
      );    
  }
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 15,
      marginBottom: 20
    },
    popular: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      color: '#808080'
    },
});

export default withNavigation(Question);
