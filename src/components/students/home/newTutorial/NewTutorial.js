
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AuthorRow from '../AuthorRow';

const NewTutorial = (props) => {

    const tutorial = props.tutorial;
    return (
    <>
        <View style={styles.newTutorials}>
              <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
                <AuthorRow content={tutorial} avatarSize='small'/>
                <View style={{display: 'flex', alignSelf: 'center', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon
                    name='check'
                    type='font-awesome'
                    color='#f80'
                    size={15}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                    />
                    <Text style={styles.additionalInfo}>{tutorial.firstExpertise}</Text>
                </View>            
                <View style={{flexDirection: 'row'}}>
                    <Icon
                    name='check'
                    type='font-awesome'
                    color='#f80'
                    size={15}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                    />
                    <Text style={styles.additionalInfo}>{tutorial.secondExpertice}</Text>
                </View>   
                </View>         
        </View>

    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 15,
      borderColor: '#808080',
      borderWidth: .6,
      padding: 8,
      borderRadius: 10,
      borderStyle: 'dotted'
    },
    newTutorials: {
      padding: 10,
      borderColor: '#f0f0ed',
      borderWidth: .6,
      borderRadius: 10,
      marginHorizontal: 5,
      elevation: 3,
      marginVertical: 10
    },
    viewTutorials: {
      color: '#808080',
      fontSize: 16,
      alignSelf: 'center',
      marginHorizontal: 5      
    },
    tutorialTitle: {
      fontSize: 16,
      color: '#808080',
      marginBottom: 5
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    }
});

export default withNavigation(NewTutorial);
