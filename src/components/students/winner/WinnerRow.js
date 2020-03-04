
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';

import UserAvatar from '../home/UserAvatar'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';



class WinnerRow extends React.Component{

 constructor(props){
    super(props);
    this.state = {
      bgColor: [
        'red',
        'blue',
        'yellow',
      ],
    };

  }

  handleWinnerClick(winner){
    this.props.navigation.navigate('WinnerProfile');
  }

  render(){
    // const {winners} = this.props
    var currentColor = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
    const { winners } = this.props;
    

    return (
      <>
      {
        winners.map((winner, index) => {
              return(
                <>
                  <View style={styles.containUser} key={index}>
                    <TouchableOpacity
                     onPress={() => this.handleWinnerClick(winner)}>
                      <View style={{flexDirection: 'row'}}>
                          <UserAvatar fullName={winner.fullName} bgColor={currentColor}/>
                          <View style={styles.containUserInfo}>
                              <Text style={styles.nameStyle}>{winner.fullName.charAt(0).toUpperCase() + 
                                                      winner.fullName.slice(1)}</Text>
                              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
                                  <Icon
                                      name='map-marker'
                                      type='font-awesome'
                                      color='#27597b'
                                      size={15}
                                      onPress={() => {}}
                                      containerStyle={{ marginTop: 20 }}
                                      />
                                  <Text style={styles.town}>{winner.town}</Text>
                              </View>
                          </View>
                      </View>
                    </TouchableOpacity>
                    <Icon
                        name='chevron-right'
                        type='font-awesome'
                        color='#27597b'
                        size={20}
                        onPress={() => {}}
                        containerStyle={{ marginTop: 20 }}
                    />
                  </View>
               </>
              )   
        })
      }
      </>
    );
  }
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    },
    town: {
        fontSize: 13,
        marginLeft: 5,
        color: '#27597b'
    },
    containUser: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginVertical: 10,
        marginRight: 10
    },
    containUserInfo: {
      marginHorizontal: 10
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: '700'
    },
    container: {
        paddingHorizontal: 3,
        marginVertical: 10
    },
    iconStyle: {
      marginVertical:5
    }
});

export default WinnerRow;
