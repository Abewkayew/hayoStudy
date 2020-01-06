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
    return (
      <>
      {
        blogContents.map((blog) => {
          return(
              <Card containerStyle={{marginHorizontal: 3, marginVertical: 3, paddingHorizontal: 5}}>
                  <>
                     <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details')}>
                        <AuthorRow blog={blog}/>
                        <Title title={blog.title}/>
                      </TouchableNativeFeedback>
                        {
                           blog.blogVideo ? (
                              <View style={{width: '100%', height: 200}}>
                                <BlogVideo videoUrl={blog.blogVideo} thumbnailUrl={blog.thumbnailUrl} title={blog.title}/>
                                {/* <View style={{marginVertical: 10}}>
                                  <Icon
                                      name='download'
                                      type='font-awesome'
                                      color='#27597b'
                                      size={20}
                                      onPress={() => {}}
                                      containerStyle={{ marginTop: 20 }}
                                    />
                                </View> */}
                              </View>
                           ): (
                            <View>
                                <Image
                                  source={{uri: blog.blogImage}}
                                  style={{height: 150, width: "100%"}}
                                  PlaceholderContent={<ActivityIndicator />}
                                  />
                            </View> 
                           )                           
                        }
                     <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details')}>
                        <Text style={styles.blogText}>{blog.description.charAt(0).toUpperCase() + blog.description.slice(1)}</Text>
                     </TouchableNativeFeedback>     
                    <Actions/>
                  </>
              </Card>
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
    blogText: {
        fontSize:16,
        paddingVertical: 10,
        lineHeight: 26
    }
});

export default withNavigation(BlogContent);
