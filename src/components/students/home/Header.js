
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated
} from 'react-native';

import {brandColor} from '../../../utils/Colors/color';

export default class Header extends React.Component{

  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0)
  }

handleSlide = type => {
  let {active, xTabOne, xTabTwo, translateX} = this.state;
  Animated.spring(translateX, {
    toValue: type,
    duration: 100
  }).start();

  

}


  render(){
    let {xTabOne, xTabTwo, translateX, active} = this.state;
    return (
            <SafeAreaView> 
        <View style={styles.wholeContainer}>
          <View style={styles.container}>
             <Animated.View
               style={[styles.overlay, {transform: [{translateX}]}]}
             />
             <TouchableOpacity style={[styles.buttonStyle,{borderRightWidth: 0,
                      borderTopRightRadius: 0, borderBottomRightRadius: 0}]
              }
              onLayout={event => this.setState({
                xTabOne: event.nativeEvent.layout.x
              })}
              onPress={() => this.setState({active: 0}, () => this.handleSlide(xTabOne))}
              >
               <Text style={[styles.text, {color: active == 0 ? '#fff' : '#1c396d'}]}>Tutorials</Text>
             </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, {borderLeftWidth: 0,
                          borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
                  onLayout={event => this.setState({
                      xTabTwo: event.nativeEvent.layout.x
                    })}
                  onPress={() => this.setState({active: 1}, () => this.handleSlide(xTabTwo))}
                  >
             <Text style={[styles.text, {color: active == 1 ? '#fff' : '#1c396d'}]}>Questions</Text>
             </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }

};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
    },
    wholeContainer: {
      width: '99%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    container: {
      marginTop: 5,
      marginBottom: 10,
      height: 36,
      position: 'relative',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    overlay: {
      position: "absolute",
      width: '50%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: '#27597b', // Sloboda-Studio brand color
      borderRadius: 4
    },
    buttonStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#27597b'
    }
});

