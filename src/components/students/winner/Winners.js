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

import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';
import BottomNavigation from '../home/BottomNavigation';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WinnerRow from './WinnerRow';
import NextLiveCompetition from './NextLiveCompetition';


import { winners } from '../../../utils/mock_data/data';
import CommonButton from '../../common/CommonButton';
import TitleHeader from '../../common/TitleHeader';

class Winners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };

  }


  render(){
    const colors = {menuColor: '#fff', profileColor: '#fff', favoriteColor: '#f80', notificationColor: '#fff'}

  return (
    <>
      <TitleHeader iconName='arrow-left' title='Winners'/>
      <View style={styles.container}>
        <View style={styles.winners}>
          <Text style={styles.textStyle}>Top three winners for Today</Text>
          <WinnerRow winners={winners}/>
          <NextLiveCompetition/>
          <CommonButton textValue='Compete Live' navigateTo='ParticipateLive'/>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <BottomNavigation {...colors}/>
      </View>
    </>
   ); 
 }
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        paddingVertical: 5,
        marginHorizontal: 10
     },
     winners: {
        justifyContent: 'center',
     },
     styleLottie: {
       width: '90%', 
       height: '90%',
       alignSelf: 'center'
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      marginVertical: 5
    },
    winnerCompetStyle: {
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 12,
    },
    bottomNav: {
      marginTop: 80
    }
});

export default withNavigation(Winners);
