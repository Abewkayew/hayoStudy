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

class Winners extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      progress: new Animated.Value(0),
      showTrophy: true,
    };

  }

  componentDidMount() {
    const that = this;
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
        that.hideTrophy();    
    }, 2000);

  }

  hideTrophy(){
    this.setState({
      showTrophy: false
    });
  }

  render(){
    const colors = {menuColor: '#fff', profileColor: '#fff', favoriteColor: '#f80'}
    const {showTrophy} = this.state;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
         onPress={() => this.props.navigation.goBack()}
         >
           <Icon
              name='arrow-left'
              type='font-awesome'
              color='#27597b'
              size={20}
              onPress={() => {}}
              containerStyle={{ marginTop: 20 }}
            /> 
        </TouchableOpacity>

         {
           showTrophy ? (
            <View style={styles.styleLottie}>
              <LottieView source={require('../../../utils/json_data/thropy-01.json')}
                progress={this.state.progress} />            
            </View>
           ): (
              <View>
                <Text style={styles.textStyle}>Top three winners for Today</Text>
                <WinnerRow winners={winners}/>
                <NextLiveCompetition/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ParticipateLive') }
                    style={styles.buttonStyle}>
                    <Text style={styles.winnerCompetStyle}>Participate live</Text>
                </TouchableOpacity>
              </View>
           )
         }              
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
        flexDirection: 'column',
        paddingVertical: 10,
        marginHorizontal: 10
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
      marginVertical: 10
    },
    winnerCompetStyle: {
      textAlign: 'center',
      fontSize: 18,
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
      marginVertical: 15
    }
});

export default withNavigation(Winners);
