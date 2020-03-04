import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Animated,
  Keyboard
} from 'react-native';


import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';
import RegisterProgress from './RegisterProgress';
import Form from './Form';
import MoreInfo from './MoreInfo';
import SuccessRegistration from './SuccessRegistration';
import { Header } from 'react-native/Libraries/NewAppScreen';

class RegisterForm extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       showLoading: false,
       progressWidth: 15,
       btnColor: '#fff',
       textColor: '#000',
       firstDone: false,
       secondDone: false,
       thirdDone: false,
       step: 1,
       fullName: '',
       phoneNumber: '',
       educationLevel: '',
       town: '',
       school: '',    
     }
  }

  // go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    })
    // increment progress
    this.incrementProgressWidth();
  }

  // go to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    })
    // decrement progresswidth
    this.decrementProgressWidth();
  }

// increment progress..

   incrementProgressWidth = () => {
     const { progressWidth} = this.state;
     this.setState({
       progressWidth: progressWidth + 45,
       done: true,
     })
   }

// decrement progress..
  
    decrementProgressWidth = () => {
      const { progressWidth} = this.state;
      this.setState({
        progressWidth: progressWidth - 45,
        done: false
      })
    }

  // handle change
  handleChange = (field) => {
    console.log('Field is: ', field)
  }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//  };

render(){
    let progressWidth = `${this.state.progressWidth}%`;
    let { btnColor, textColor} = this.state;

    const progressValues = {btnColor, textColor, progressWidth}
    
    let { step } = this.state;      
    console.log('STEP: ', step)  
    switch(step) {
      case 1: 
        return (
          <>
            <RegisterProgress {...progressValues}/>
            <Form
              nextStep={this.nextStep}
              handleChange={this.handleChange}/>
          </>
        );
        break
      case 2: 
        return (
          <>      
            <RegisterProgress {...progressValues} firstDone={true} secondDone={false}/>
            <MoreInfo
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}/>
          </>
        );
        break
      case 3: 
        return (
          <>      
            <RegisterProgress {...progressValues} firstDone={true} secondDone={true} thirdDone={true}/>
            <SuccessRegistration
             prevStep={this.prevStep}
             handleChange={this.handleChange}/>
          </>
        );
        break

    }

  }
};

const styles = StyleSheet.create({    
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
      borderBottomWidth: 1,
      borderTopColor: '#fff',
      borderRightColor: '#fff',
      borderLeftColor: '#fff',
      borderBottomColor: '#27597b',
      height: 44,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      marginBottom: 20,
    }
});

export default withNavigation(RegisterForm);
