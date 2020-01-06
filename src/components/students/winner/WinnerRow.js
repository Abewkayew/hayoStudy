
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



class WinnerRow extends React.Component{

 constructor(props){
    super(props);

  }

  render(){
    // const {winners} = this.props
    return (
      <>
      {
        this.props.winners.map((winner) => {
              return(
                <>
                  <View style={styles.containUser}>
                    <View style={{flexDirection: 'row'}}>
                        <UserAvatar fullName={winner.fullName}/>
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
