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
import { TouchableNativeFeedback} from 'react-native-gesture-handler';

import { topics } from '../../../utils/mock_data/data'

const ChooseTopic = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            {
              topics.map((topic, index) => {
                return(
                  <TouchableNativeFeedback style={styles.topic} key={index}>
                    <Text style={styles.text}>{topic.name}</Text>
                  </TouchableNativeFeedback>
      
                )
              })
            }
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 5,
      color: '#fff'
    },
    topic: {
        backgroundColor: '#27597b',
        paddingHorizontal: 40,
        paddingVertical: 30,
        borderRadius: 10,
        marginHorizontal: 5
    }
});

export default withNavigation(ChooseTopic);
