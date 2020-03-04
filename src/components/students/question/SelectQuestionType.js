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

import { withNavigation } from 'react-navigation';
import BottomNavigation from '../home/BottomNavigation';
import TitleHeader from '../../common/TitleHeader';

const SelectQuestionType = (props) => {
  const colors = {menuColor: '#fff', profileColor: '#fff', favoriteColor: '#fff', notificationColor: '#fff'}
  return (
    <>
       <TitleHeader title='Ask Question' iconName='arrow-left'/>
       <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity  onPress={() => props.navigation.navigate('AskQuestion') }
                style={styles.styleButtons}>
                    <Text style={styles.styleInsideButtonText}>General Question</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('AskQuestion') }
                  style={styles.styleButtons}>
                      <Text style={styles.styleInsideButtonText}>Home Work</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('AskQuestion') }
                style={styles.styleButtons}>
                    <Text style={styles.styleInsideButtonText}>Assignment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('AskQuestion') }
                style={styles.styleButtons}>
                    <Text style={styles.styleInsideButtonText}>Sample Question</Text>
                </TouchableOpacity>
            </View>
       </ScrollView>
      <View style={styles.bottomNav}>
        <BottomNavigation {...colors}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 10,
      fontWeight: '700'
    },
    bottomNav: {
      marginTop: 80
    },
    styleButtons: {
        width: 150,
        height: 100,
        paddingVertical: 30,
        marginVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: '#27597b',
        borderRadius: 10,
        borderBottomColor: '#f80',
        borderBottomWidth: 10
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    }
});

export default withNavigation(SelectQuestionType);
