
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  Dimensions
} from 'react-native';

import { Image, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const Ad = (props) => {
  const {ads} = props;
  const scrollX = new Animated.Value(0) // this will be the scroll location of our ScrollView
  let position = Animated.divide(scrollX, width)        

  return (
    <>
      <ScrollView
          horizontal={true}
          pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
          showsHorizontalScrollIndicator={false}
          // the onScroll prop will pass a nativeEvent object to a function
          onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
          [{ nativeEvent: { contentOffset: { x: scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
          )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
          scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
          contentContainerStyle={styles.contentContainer}
          nestedScrollEnabled={false}
          snapToEnd={false}
          contentInset={{top: 100}}
          disableIntervalMomentum={true}
          >
            {
              ads.map((ad) => {
                return(
                  <>
                    <View style={{flexDirection: 'column', marginHorizontal: 5}}>
                     <TouchableOpacity style={{borderRadius: 15, borderWidth: 1,
                         borderColor: '#dddddd', overflow: 'hidden'}}>
                       <Image
                        style={{height: 90, width: width*0.8}}
                        source={{uri: ad.image}}/>
                     </TouchableOpacity>
                      <Text style={{alignSelf: 'center'}}>{ad.title}</Text>
                   </View>                    
                  </>
                );
              })
            }
      </ScrollView>      
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {/* Display the dots for the profile Images  */}
                {
                  ads.map((_, i) => { // the _ just means we won't use that parameter
                  let opacity = position.interpolate({
                      inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                      outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                      extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                  });

                      return (
                          <Animated.View // we will animate the opacity of the dots later, so use Animated.View instead of View here
                          key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                          style={{ opacity, height: 10, width: 10, backgroundColor: '#202020', margin: 8, 
                          borderRadius: 10, marginTop: 15}}
                          />
                      );
                    })
                    }                            
              </View>
    </>
  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'     
    }
});

export default Ad;
