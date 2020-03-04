
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Header';
import Ad from './Ad';
import Notice from './Notice';
import BottomNavigation from './BottomNavigation';
import BlogContent from './BlogContent';
import Blog from './Blog';

import { ads } from '../../../utils/mock_data/data';

const Home = () => {
  return (
    <>
       <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Ad ads={ads}/> */}
            <Notice/>
            <BlogContent/>
          </ScrollView>
       </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;