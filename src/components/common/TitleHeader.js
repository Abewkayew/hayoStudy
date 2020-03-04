
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
import {TouchableOpacity} from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const TitleHeader = (props) => {
  const {showRightOption, showrightPlusOption, title, iconName} = props;
  return (
    <>
      <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.button} >
              <Icon
                  name={iconName}
                  type='font-awesome'
                  color='#fff'
                  size={20}
                  onPress={() => {}}
                  containerStyle={{ marginTop: 20 }}
                  /> 
              </TouchableOpacity> 
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={{marginHorizontal: 20}}>
            {
              showRightOption ? (
                <Icon
                name='ellipsis-v'
                type='font-awesome'
                color='#fff'
                size={20}
                onPress={() => {}}
                containerStyle={{ marginTop: 20 }}
                />
              ) : (
                null
              )
            }
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
      shadowRadius: 10,
      paddingVertical: 14,
      backgroundColor: '#27597b',
      borderBottomColor: '#ebebeb',
    },
    button: {
      marginHorizontal: 10
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 10
    }
});

export default withNavigation(TitleHeader);
