
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  ActivityIndicator
} from 'react-native';

import {withNavigation} from 'react-navigation';
import Home from './Home';
import Question from '../question/Question';
import BottomNavigation from './BottomNavigation';
import { ScrollView } from 'react-native-gesture-handler';
import UserInput from './comment/UserInput';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0)
    }
  }


componentDidMount(){
  
}  

handleSlide = type => {
  let {xTabOne, xTabTwo, translateX} = this.state;

  Animated.spring(translateX, {
    toValue: type,
    duration: 2000
  }).start();

  setTimeout(() => {
    if(type === xTabOne){
        this.setState({
          active: 0,
        })
    } else if(type === xTabTwo){
       this.setState({
         active: 1
       })
    }
  }, 500);
  
}

 StartProgressBar = () => {
   return (
    <ActivityIndicator size='large' color='#f80'/>
   )
 }


  render(){
    let { active, xTabOne, xTabTwo, translateX} = this.state;
    const colors = {menuColor: '#f80', profileColor: '#fff', favoriteColor: '#fff', notificationColor: '#fff'}
    return (
          <>
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
                      onPress={() => this.handleSlide(xTabOne)}
                      >
                      <Text style={[styles.text, {color: active == 0 ? '#1c396d' : '#808080'}]}>Questions</Text>
                    </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonStyle, {borderLeftWidth: 0,
                                  borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
                          onLayout={event => this.setState({
                              xTabTwo: event.nativeEvent.layout.x
                            })}
                          onPress={() => this.handleSlide(xTabTwo)}
                          >
                    <Text style={[styles.text, {color: active == 1 ? '#1c396d' : '#808080'}]}>Tutorials</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              <ScrollView>
                <View style={styles.showComponent}>
                  {
                    active === 0 && (
                      <Question/>
                    )
                  }
                  {
                    active === 1 && (
                      <Home/>
                    )
                  }       
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
              <BottomNavigation {...colors}/>
            </View>
        </>
    )
  }

};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        paddingVertical: 5,
        fontWeight: '700'
    },
    wholeContainer: {
      width: '99%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    container: {
      marginTop: 1,
      marginBottom: 10,
      height: 36,
      position: 'relative',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    showComponent: {
      marginBottom: 90,
    },
    bottomNav: {
      marginTop: 10
    },
    overlay: {
      position: "absolute",
      width: '50%',
      height: '100%',
      top: 0,
      left: 0,
      borderBottomColor: '#27597b', // brand color
      borderBottomWidth: 3,
    },
    buttonStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default withNavigation(Header);
