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
    return (
        <>
        <Text style={[styles.textStyle, {fontWeight: '700', marginVertical: 30}]}>You are all set</Text>
          <View style={styles.container}>    
            <LottieView source={require('../../utils/json_data/done-button.json')}
                progress={this.state.progress} />            
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home') } style={styles.buttonStyle}>
                <Text style={styles.textStyle}>Finish</Text>
            </TouchableOpacity>
            
        </>
      );
  }
  
};

const styles = StyleSheet.create({    
    container: {
        flex: .9,
        justifyContent: 'center',
        flexDirection: 'column',
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
      marginVertical: 20,
      marginHorizontal: 20
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

export default withNavigation(SuccessRegistration);
