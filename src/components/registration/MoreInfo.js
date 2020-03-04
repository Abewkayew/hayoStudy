import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  TextInput
} from 'react-native';

import {Card, Button, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommonButton from '../common/CommonButton'
import TitleHeader from '../common/TitleHeader';

class MoreInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      height: 70,
      borderRadius: 10,
      inputValue: '',
      
    }

  }
  updateSize = (height) => {
    this.setState({
      height
    });
  }

  onFocus() {
    this.setState({
        height: 100,
        borderRadius: 10
    })
  }

  handleTextChange(value){
    this.setState({inputValue: value})
  }

  render(){
    const {height, borderRadius, inputValue} = this.state;
    const { nextStep, prevStep, handleChange} = this.props;

    let newStyle = {
      height
    }    
    
    return (
      <>
      {/* <TitleHeader iconName='arrow-left' title='Provide more information'/> */}
        <View style={styles.container}>
          <TouchableOpacity style={styles.imageContainer}
            >
          <Icon
              name='user'
              type='font-awesome'
              color='#fff'
              size={50}
              onPress={() => {}}
              containerStyle={{ marginHorizontal: 16 }}
            />
          </TouchableOpacity>
          <View style={{marginVertical: 20}}>
            <TextInput
                  placeholder='Write description about yourself'
                  editable={true}
                  multiline={true}
                  onFocus={ () => this.onFocus() }
                  onChangeText={(value) => this.handleTextChange(value)}
                  style={[styles.inputStyle, newStyle,
                    {borderRadius: borderRadius }]}
                  onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
                />
          </View>  
        </View>
        <View style={styles.containButtons}>
          <TouchableOpacity 
              onPress={prevStep}
              style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={nextStep}
              style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Continue</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10
     },
     imageContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#1c396d',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal: 30,
        borderColor: '#f80',
        borderWidth: 2
     },
     inputStyle: {
       alignSelf: 'stretch',
       borderWidth: 1,
       borderColor: '#1c396d',
       paddingHorizontal: 15,
       marginHorizontal: 10,
       lineHeight: 20,
       fontSize: 20,
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
      marginBottom: 40
    }
});

export default withNavigation(MoreInfo);
