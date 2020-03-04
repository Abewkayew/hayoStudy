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
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

const ParticipateLive = (props) => {
  let {progressWidth, buttonColor, textColor, firstDone, secondDone, thirdDone } = props;
  return (
    <>
      <View style={styles.container}>
         <View
          style={[styles.overlay, {width: progressWidth}]}></View>
          <TouchableOpacity style={[styles.registerState]}>
             {
                 firstDone ? (                   
                     <Icon
                        name='check-circle'
                        type='font-awesome'
                        color='#27597b'
                        size={28}
                        onPress={() => {}}
                        containerStyle={{alignSelf: 'center'}}
                        />
                    ): (
                      <Text style={[styles.progressStateText, {color: textColor}]}>1</Text>
                   )
             }
          </TouchableOpacity>
         <TouchableOpacity style={styles.registerState}>
         {
                 secondDone ? (                   
                     <Icon
                        name='check-circle'
                        type='font-awesome'
                        color='#27597b'
                        size={28}
                        onPress={() => {}}
                        containerStyle={{alignSelf: 'center'}}
                        />
                    ): (
                      <Text style={[styles.progressStateText, {color: textColor}]}>2</Text>
                   )
             }
         </TouchableOpacity>
         <TouchableOpacity style={styles.registerState}>
         {
            thirdDone ? (                   
                <Icon
                  name='check-circle'
                  type='font-awesome'
                  color='#27597b'
                  size={28}
                  onPress={() => {}}
                  containerStyle={{alignSelf: 'center'}}
                  />
              ): (
                <Text style={[styles.progressStateText, {color: textColor}]}>3</Text>
              )
             }
         </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.innerProgress, {width: progressWidth}]}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({    
    container: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        borderTopColor: '#eee',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
     },
     overlay: {
      position: "absolute",
      height: '100%',
      top: 0,
      left: 0,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderRightWidth: 10,
      borderBottomWidth: 2,
      borderTopWidth: 1,
      borderColor: '#27597b',
      overflow: 'hidden',
    },
     registerState: {
        width: 30,
        height: 30,
        alignItems: 'center',
        borderColor: '#27597b',
        borderRadius: 50,
        borderWidth: 1,
        marginHorizontal: 10,
     },
     progressStateText: {
        fontSize: 18,
        fontWeight: 'bold',
     },
     progressContainer: {
       width: '100%',
       height: 3,
       marginTop: 1,
       borderBottomColor: '#27597b',
       borderBottomLeftRadius: 100,
       borderBottomRightRadius: 100,
       overflow: 'hidden',
     },
    //  innerProgress: {
    //    height: '100%',
    //    borderColor: '#27597b',
    //    borderWidth: 2,
    //    backgroundColor: '#27597b',
    //    borderBottomRightRadius: 20,
    //    borderTopRightRadius: 20,
    //  },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 20,
    },
    bottomNav: {
      marginTop: 80
    },
    styleCount: {
      fontWeight: '700', 
      fontSize: 24,
      color: '#f80',
      alignSelf: 'center'
    },
    styleButtons: {
        width: 120,
        height: 130,
        paddingVertical: 30,
        marginVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: '#1c396d'
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default withNavigation(ParticipateLive);
