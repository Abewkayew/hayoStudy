
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

import {notice} from '../../../utils/mock_data/data'

const Notice = () => {
  return (
    <>
      <View style={styles.container}>
        <Icon
            name='bullhorn'
            type='font-awesome'
            color='#27597b'
            size={30}
            onPress={() => {}}
          />
          <Text style={styles.text}>{notice.description}</Text>
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
      marginVertical: 5,
      borderColor: '#808080',
      borderWidth: .6,
      padding: 8,
      borderRadius: 10,
      borderStyle: 'dotted'
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    }
});

export default withNavigation(Notice);
