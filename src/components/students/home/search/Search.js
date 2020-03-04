import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import {TouchableNativeFeedback} from 'react-native-gesture-handler'

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      height: 30,
      borderRadius: 50,
      backgroundColor: '#f5f3f3',
      inputValue: ''
    }
  }


  updateSize = (height) => {
    this.setState({
      height
    });
  }

  onFocus() {
    let {height} = this.props;
    this.setState({
        height: height,
        borderRadius: 30
    })
  }

  handleTextChange(value){
    this.setState({inputValue: value})
  }
  render(){
    const {height, backgroundColor, borderRadius, inputValue} = this.state;
    const { placeHolder } = this.props;
    let newStyle = {
      height
    }

    return (
      <>
        <View style={styles.container}>
            <TextInput
              placeholder={placeHolder}
              editable={true}
              multiline={true}
              onFocus={ () => this.onFocus() }
              onChangeText={(value) => this.handleTextChange(value)}
              style={[styles.inputStyle, newStyle,
                 {borderRadius: borderRadius }]}
              onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
            />
            <Text style={styles.cancel}>cancel</Text>
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
    },
    styleTytle: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
    },
    cancel: {
        color: '#27597b',
        fontWeight: 'bold',
    },
    inputStyle: {
      alignSelf: 'stretch',      
      borderWidth: 1,
      borderColor: '#27597b',
      paddingHorizontal: 15,
      marginHorizontal: 10,
      lineHeight: 20,
      fontSize: 18,
    },
    styleSendButton: {
      marginVertical: 5,
      alignItems: 'center',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingVertical: 3
    },
    postTextActive: {
      color: '#27597b',
      fontSize: 16
    },
    postTextInactive: {
      color: '#ebebeb',
      fontSize: 16
    }
});

export default Search;
