/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



import Home from './src/components/students/home/Home';
import SettingsScreen from './src/components/students/home/Settings';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import {RootStack} from './src/components/navigation/RootNavigation';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <Home style={styles.homeStyle}/>
//     </>
//   );
// };


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  homeStyle: {
    marginHorizontal: 0
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
       <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#27597b"
        />
        <AppContainer />
       </>
      );
  }
}