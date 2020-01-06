import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput
} from 'react-native';

import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

class RegisterForm extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       showLoading: false
     }
  }

  handleLoading(){
    this.setState({
      showLoading: !this.state.showLoading
    })
  }  

  render(){
    return (
      <>
        <View style={styles.container}>    
              <TextInput
                placeholder='Full name'
                style={styles.inputStyle}
                />
              <TextInput
                placeholder='Phone number'
                style={styles.inputStyle}
              />
              <TextInput
                placeholder='Education level'
                style={styles.inputStyle}
              />
              <TextInput
                placeholder='Town'
                style={styles.inputStyle}
              />
              <TextInput
                placeholder='School name'
                style={styles.inputStyle}
              />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MoreInfo') }
               style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Next</Text>
              </TouchableOpacity>
        </View>
          
      </>
    ); 
  }
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      paddingVertical: 12,
    },
    bottomNav: {
      marginTop: 80
    },
    buttonStyle: {
      justifyContent: 'center',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#1c396d',
      marginVertical: 20
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    inputStyle: {
      alignSelf: 'stretch',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#27597b',
      height: 44,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginBottom: 20,
    }
});

export default withNavigation(RegisterForm);
