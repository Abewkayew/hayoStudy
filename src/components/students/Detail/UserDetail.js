
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
import {TouchableOpacity} from 'react-native-gesture-handler'
import { Avatar, Badge } from "react-native-elements";

import TitleHeader from '../../common/TitleHeader';

const UserDetail = (props) => {
  const { navigation } = props;
  const fullName = navigation.getParam('fullName')
  const town = navigation.getParam('town')
  const profilePhoto = navigation.getParam('profilePhoto')
  const verified = navigation.getParam('verified')
  const educationLevel = navigation.getParam('educationLevel')
  const school = navigation.getParam('school')
  const expertiseType = navigation.getParam('expertiseType')
  const previousExperience = navigation.getParam('previousExperience')
  const about = navigation.getParam('about');
  return (
    <>
      <TitleHeader iconName='arrow-left' title='User Detail'/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.styleProfileContainer}>
            <Avatar
                size="large"
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                activeOpacity={0.1}
                containerStyle={{marginLeft: 2, marginTop: 1}}
              />
          </TouchableOpacity>
          <Text style={styles.text}>{fullName}</Text>
          <View style={styles.reactions}>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.clapbutton} >
                <Image style={styles.clap} source={require("../../../utils/clap_image.png")} />
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#f80'}}>235</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.clapbutton} >
                  <Icon
                      name='thumbs-up'
                      type='font-awesome'
                      color='#27597b'
                      size={20}
                      onPress={() => {}}
                      containerStyle={{ marginTop: 20 }}
                    />
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#f80'}}>512</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.clapbutton} >
                  <Icon
                    name='comment'
                    type='font-awesome'
                    color='#27597b'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#f80'}}>25</Text>
            </View>
         </View>
          <Text style={styles.text}>{town}</Text>
          <Text style={styles.text}>{verified}</Text>
          <Text style={styles.text}>{educationLevel}</Text>
          <Text style={styles.text}>{school}</Text>
          <Text style={styles.text}>{expertiseType}</Text>
          <Text style={styles.text}>{previousExperience}</Text>

          <Text>About</Text>
          <Text>{about}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginHorizontal: 15
    },
    reactions: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    },
    clapbutton: {
      height: 30,
      width: 30,
      borderRadius: 30,
      backgroundColor: "#ecf0f1",
      borderColor: '#27597b',
      borderWidth: 1,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center"
    },
    clap: {
      height: 30,
      width: 40
    },    
    styleProfileContainer: {
      alignSelf: 'center',
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#f80'
    },
});

export default withNavigation(UserDetail);
