import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList
} from 'react-native';

import { Image, Card } from 'react-native-elements';

import AuthorRow from './AuthorRow';
import Actions from './Actions';
import Title from './Title';

import { TouchableHighlight, TouchableOpacity, TouchableNativeFeedback} from 'react-native-gesture-handler';


import { blogContents } from '../../../utils/mock_data/data';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


import BlogVideo from './BlogVideo';
import ChooseTopic from '../chooseTopic/ChooseTopic';
import { newTutorials } from '../../../utils/mock_data/data'
import NewTutorial from './newTutorial/NewTutorial';

class BlogContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }

        
 
  render(){   
    const {data, loading} = this.state;
    const showFollow = true;

    return (
      <>      
      <Text style={styles.discover}>Discover new tutorials</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
          
        {
          newTutorials.map((tutorial, index) => {
            return(
              <NewTutorial tutorial={tutorial}/>
            )
          })
        }
      </ScrollView>
      <View 
        style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
        <Text style={styles.viewTutorials}>View all tutorials</Text>
        <Icon
          name='arrow-right'
          type='font-awesome'
          color='#808080'
          size={15}
          onPress={() => {}}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
      {
        blogContents.map((blog, index) => {
          return(
              <>
              <Card containerStyle={{marginHorizontal: 3, marginVertical: 5, paddingHorizontal: 5,
                       backgroundColor: '#f0f0ed', borderColor: '#f0f0ff',
                       borderWidth: 1, borderRadius: 10, elevation: 2}}
                key={blog.id}>
                  <>
                     <AuthorRow content={blog} avatarSize='medium' showFollow={showFollow}/>
                     <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details', {
                        blog: blog
                      })}>
                        <Title title={blog.title}/>
                      </TouchableNativeFeedback>
                        {
                          //  blog.blogImage ? (
                          //   <View>
                          //     <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details', {
                          //       blog: blog
                          //     })}>
                          //       <Image
                          //         source={{uri: blog.blogImage}}
                          //         style={{height: 150, width: "100%"}}
                          //         PlaceholderContent={<ActivityIndicator />}
                          //         />
                          //     </TouchableNativeFeedback>
                          //   </View>
                          //  ): (
                          //    null
                          //  )                           
                        }
                     <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details', {
                          blog: blog
                        })}>
                        <Text style={styles.blogText}>{blog.description.charAt(0).toUpperCase() + blog.description.slice(1)}</Text>
                        <Text>Read more</Text>                          
                     </TouchableNativeFeedback>
                    <Actions {...blog}/>
                  </>
              </Card>    
              {
                (index === 1) && (
                  <>
                    <View style={styles.topics}>
                      <Text style={styles.discover}>Choose your topic</Text>
                      <ChooseTopic/>
                    </View>
                  </>
                )
              }
             </>       

          )
        })
      }
      </>
    );
     
  }
  
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    },
    discover: {
      color: '#808080',
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginBottom: 5
    },
    additionalInfo: {
      marginLeft: 5,
    },
    blogText: {
        fontSize:16,
        paddingVertical: 3,
        lineHeight: 26
    },
    topics: {
       marginVertical: 10  
    },
    newTutorials: {
      padding: 10,
      borderColor: '#808080',
      borderWidth: .6,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    viewTutorials: {
      color: '#808080',
      fontSize: 16,
      alignSelf: 'center',
      marginHorizontal: 5      
    },
    tutorialTitle: {
      fontSize: 16,
      color: '#808080',
      marginBottom: 5
    }
});

export default withNavigation(BlogContent);
