import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  AppRegistry,
  Text
} from 'react-native';

import BottomNavigation from '../home/BottomNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';


class Detail extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
  const colors = {menuColor: '#fff', profileColor: '#fff', favoriteColor: '#fff'}

  return (
    <>
      <View style={styles.container}>
      <TouchableOpacity
         onPress={() => this.props.navigation.goBack()}
         style={{}}>
        <Icon
            name='arrow-left'
            type='font-awesome'
            color='#27597b'
            size={20}
            onPress={() => {}}
            containerStyle={{ marginTop: 20 }}
          />
         </TouchableOpacity>
        <Text style={{marginVertical: 50}}>Detail component</Text>
      </View>
      <View style={styles.bottomNav}>
        <BottomNavigation {...colors}/>
      </View>
   </>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
    marginHorizontal: 10,
 },
  textInput: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bottomNav: {
    marginTop: 80
  },
});

export default Detail;