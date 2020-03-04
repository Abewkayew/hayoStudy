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
import {TouchableOpacity} from 'react-native-gesture-handler'

const CommonButton = (props) => {
  const {navigateTo, textValue} = props; 
  return (
    <>    
        <TouchableOpacity 
        onPress={() => props.navigation.navigate(navigateTo)}
        style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{textValue}</Text>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 8,
  },
  buttonStyle: {
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#1c396d',
    marginVertical: 20
  },
});

export default withNavigation(CommonButton);
