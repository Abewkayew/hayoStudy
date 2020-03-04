
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

import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

class ProvideAnswerButton extends React.Component{
  constructor(props){
    super(props)
  }

  handleAnswerQuestion(question){
    // this.setState({
    //   showAnswerInput: !this.state.showAnswerInput
    // });
    const { navigation } = this.props;
    navigation.navigate('AnswerQuestion', {
        question: question
    });

   }

  render(){
    const {textValue, question} = this.props;
    return (
      <>
          <View style={{marginHorizontal: 10}}>
              <TouchableOpacity
                  onPress={() => this.handleAnswerQuestion(question)}
                  style={styles.buttonStyle}>
              <Text style={styles.textStyle}>{textValue}</Text>
              </TouchableOpacity>
          </View>
      </>
    );
 }
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
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 8,
        color: '#808080'
      },
      buttonStyle: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        marginVertical: 6,
        elevation: 1
      },
});

export default withNavigation(ProvideAnswerButton);
