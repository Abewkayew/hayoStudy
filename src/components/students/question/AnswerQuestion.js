
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleHeader from '../../common/TitleHeader';
import UserInput from '../home/comment/UserInput';
import {TouchableOpacity} from 'react-native-gesture-handler'
import UserAvatar from '../home/UserAvatar';
import WriteAnswer from './WriteAnswer';

class AnswerQuestion extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          showAnswer: false,
      }
  }
   
  render(){
    const { navigation } = this.props;
     const question = navigation.getParam('question')
     const avatarSize = 'small'

      return (
          <>
          <TitleHeader iconName='window-close'/>
          <ScrollView>
           <View style={styles.container}>
              <Text style={styles.questionTitle}>{question.title}</Text>
              {
               question.questionImage && (
                  <Image
                    source={{uri: question.questionImage}}
                    style={{height: 80, width: '100%'}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                )
              }
              <Text
               style={{marginVertical: 10, fontSize: 16, alignSelf: 'center'}}>
                 {question.description}
              </Text>
              <View style={styles.attachButtons}>
                <TouchableOpacity style={styles.styleButtons}>
                    <Text style={styles.textStyle}>Pick Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleButtons}>
                    <Text style={styles.textStyle}>Attach Reference Material</Text>
                </TouchableOpacity>
              </View>
              <UserInput placeHolder='Provide your answer here...' height={100}/>
            </View>
           </ScrollView>
          </>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 15,
      overflow: 'hidden'
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    },
    attachButtons: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      marginVertical: 5
    },
    questionTitle: {
      fontSize: 20, 
      fontWeight: '700', 
      marginVertical: 5, 
      alignSelf: 'center'
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 14,
      paddingVertical: 8,
      paddingHorizontal: 10,
      color: '#808080'
    },
    containAnswerPost: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    styleButtons: {
      justifyContent: 'center',
      borderRadius: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e3e3e3',
      marginVertical: 6,
      elevation: 1,
    },
});

export default withNavigation(AnswerQuestion);
