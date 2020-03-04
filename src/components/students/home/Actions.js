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

import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import WriteComment from './comment/WriteComment';

class Actions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCommentInput: false
    }
  }

  handleComment(){
    this.setState({
      showCommentInput: !this.state.showCommentInput
    });
  }

  render(){
    const {showCommentInput} = this.state;
    const {fullName, avatarSize, showAvatar} = this.props;
    return (
      <>
       <View style={styles.container}>
           <TouchableOpacity>
             <View style={{flexDirection: 'row'}}>
                <Icon
                    name='thumbs-up'
                    type='font-awesome'
                    color='#27597b'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                <Text style={styles.styleAction}>Like</Text>
             </View>            
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{flexDirection: 'row'}}>
                <Icon
                    name='share'
                    type='font-awesome'
                    color='#27597b'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                <Text style={styles.styleAction}>Share</Text>
             </View>   
           </TouchableOpacity>
           <TouchableOpacity 
            onPress={() => this.handleComment()}>
           <View style={{flexDirection: 'row'}}>
                <Icon
                    name='comment'
                    type='font-awesome'
                    color='#27597b'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                <Text style={styles.styleAction}>Comment</Text>
             </View>            
  
           </TouchableOpacity>
           </View>
            {
              showCommentInput && (
                  <WriteComment {...this.props}/>
              )
            }
      </>
    );
  }
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
        justifyContent: 'space-between',
    },
    styleAction:{
      fontSize: 15,
      textShadowColor: '#808080',
      textShadowRadius: 2,
      marginLeft: 3,
      color: '#808080'
    }
});

export default Actions;
