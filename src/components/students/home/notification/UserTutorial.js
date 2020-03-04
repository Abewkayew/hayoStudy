import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


import { withNavigation } from 'react-navigation';
import CommonButton from '../../../common/CommonButton';
import TitleHeader from '../../../common/TitleHeader';

class UserTutorial extends React.Component{
  constructor(props){
    super(props);
  }

   render(){
      const {navigation} = this.props;
      const tutorialContent = navigation.getParam('tutorialContent');
  
      console.log('Tutorial Content: ', tutorialContent);
      return (
      <>
        <TitleHeader iconName='arrow-left' title='Tutorials for you'/>
        <View style={styles.container}>
          <Text>{tutorialContent.type}</Text>
          <Text>{tutorialContent.title}</Text>
          <Text>{tutorialContent.date}</Text>   
          <Text>Blogger Title: {tutorialContent.userTitle}</Text>
          <Text style={{alignSelf: 'center', fontSize:16, marginVertical: 20}}>students registered so far for live competition</Text>
          <CommonButton navigateTo='ExploreMore' textValue='Explore More tutorials'/>
        </View>
      </>
    );
   }
};

const styles = StyleSheet.create({    
    container: {
        justifyContent: 'center',
        marginHorizontal: 10,
     },
    textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 20,
    },
    bottomNav: {
      marginTop: 80
    },
    styleCount: {
      fontWeight: '700', 
      fontSize: 24,
      color: '#f80',
      alignSelf: 'center'
    },
    styleButtons: {
        width: 120,
        height: 130,
        paddingVertical: 30,
        marginVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: '#1c396d'
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default withNavigation(UserTutorial);
