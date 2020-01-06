import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  Button,
  TouchableHighlight
} from 'react-native';

import {Card } from 'react-native-elements';
import Actions from './Actions';
import BlogContent from './BlogContent';
import { withNavigation } from 'react-navigation';


const Title = (props) => {
  return (
    <>
      <View style={styles.container}>
          <Text style={styles.styleTytle}>
              {props.title}
          </Text>
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({    
    container: {
        flexDirection: 'column',
        flexGrow: 1,
        marginVertical: 5
    },
    styleTytle: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 10
    }
});

export default Title;
