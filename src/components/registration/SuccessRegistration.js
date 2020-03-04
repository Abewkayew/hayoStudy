import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Easing
} from 'react-native';

import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


import { withNavigation } from 'react-navigation';

import LottieView from 'lottie-react-native';
import CommonButton from '../common/CommonButton.js';
import TitleHeader from '../common/TitleHeader.js';

class SuccessRegistration extends React.Component {
  constructor(props){
     super(props);
     this.state = {
        progress: new Animated.Value(0),
      };
  
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }


  render(){
    const { prevStep, handleChange, navigation} = this.props

    return (
        <>
        <Text style={[styles.textStyle,
          {fontWeight: '700', marginVertical: 15, fontSize: 20, alignSelf: 'center' }]}>
            You are all set
          </Text>
          <Text
           style={{alignSelf: 'center', fontSize: 20, color: '#808080'}}>
             HayoStudy: A journey to excellence
           </Text>
          <View style={styles.container}>
            <LottieView source={require('../../utils/json_data/done-button.json')}
                progress={this.state.progress} />            
          </View>          
          <View style={styles.containButtons}>
            <TouchableOpacity 
              onPress={prevStep}
              style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Header')}
                style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Finish</Text>
            </TouchableOpacity>
          </View>
            
        </>
      );
  }
  
};

const styles = StyleSheet.create({    
    container: {
        flex: .9,
        justifyContent: 'center',
        flexDirection: 'column',
     },
    bottomNav: {
      marginTop: 80
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
    },
    textStyle: {
       fontSize: 20,
       fontWeight: '500',
       alignSelf: 'center',
       marginVertical: 10
   },
   containButtons: {
      flexDirection: 'row', 
      justifyContent: 'center'
   },
   buttonStyle: {
     justifyContent: 'center',
     borderRadius: 15,
     borderBottomWidth: 1,
     borderWidth: .8,
     borderColor: '#808080',
     marginHorizontal: 20,
     paddingHorizontal: 30,
     marginBottom: 40,
   }
});

export default withNavigation(SuccessRegistration);
