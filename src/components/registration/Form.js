import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Animated,
    Keyboard
  } from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler'

export default class Form extends React.Component {

    render(){
        const { nextStep, handleChange} = this.props;
        return (
            <>
              <View style={styles.container}>
                    <View style={{justifyContent: 'center'}}>
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
                    </View>
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

const styles = {
    container: {
        marginHorizontal: 10,
        marginVertical: 10
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
     },
     textStyle: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 8,
      },
      buttonStyle: {
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1c396d',
        marginVertical: 20
      },

}
