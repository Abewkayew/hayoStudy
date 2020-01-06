import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput
} from 'react-native';

class UserInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      height: 44
    }
  }


  updateSize = (height) => {
    this.setState({
      height
    });
  }

  render(){
    const {height} = this.state;
    
    let newStyle = {
      height
    }

    return (
      <>
        <View style={styles.container}>
            <TextInput
              placeholder='Add a comment...'
              multiline
              style={[styles.inputStyle, newStyle]}
              onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
            />
        </View>
      </>
      
    );  
  }
};

const styles = StyleSheet.create({    
    container: {
        flexDirection: 'column',
        flexGrow: 1
    },
    styleTytle: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 10
    },
    inputStyle: {
      alignSelf: 'stretch',
      borderRadius: 150,
      borderWidth: 1,
      borderColor: '#27597b',
      paddingHorizontal: 15,
      marginHorizontal: 10,
      lineHeight: 30
    }
});

export default UserInput;
