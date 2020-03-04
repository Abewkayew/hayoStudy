
import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Animated
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';


import { withNavigation } from 'react-navigation';
import TitleHeader from "../../common/TitleHeader";
import AuthorRow from "../home/AuthorRow";
import ClapBubble from './ClapBubble';
import Title from "../home/Title";


class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      claps: []
    };
  }

 clap() {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push(count);
    this.setState({ count });
    console.log(count);
  }

  keepClapping() {
    console.log('LongPress Works')    
  }

  renderClaps() {
    return this.state.claps.map(countNum => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete.bind(this)}
      />
    ));
  }

  animationComplete(countNum) {
    const claps = this.state.claps;
    claps.splice(claps.indexOf(countNum), 1);
    this.setState({ claps });
  }

 render() {
  const { navigation } = this.props;

  const blog = navigation.getParam('blog');

  const title = blog.title;
  const blogImage = blog.blogImage;
  const description = blog.description;

    return (
      <>
      <TitleHeader title='Detail' navigateTo='Home' showRightOption={true} iconName='arrow-left'/>
        <View style={styles.container}>
          <ScrollView>
          <Title title={title}/>
            {
              blogImage ? (
                  <Image style={{width: '100%', height: 100}} source={{uri: blogImage}}/>
              ) : (
                null
              )
            }
            <View style={{marginVertical: 20}}>
              <AuthorRow content={blog} avatarSize='small'/>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={{marginVertical: 10, display: 'flex', flexDirection: 'row'}}>
                <Icon
                    name='thumbs-up'
                    type='font-awesome'
                    color='#27597b'
                    size={18}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                  <Text style={{marginHorizontal: 6}}>156</Text>
                  <View style={{flexDirection: 'row',}}>
                    <Image style={{width: 30, height: 20}} source={require("../../../utils/clap_image.png")} />
                    <Text style={{marginHorizontal: 6}}>259</Text>
                  </View>
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={styles.title}>Comments</Text>                
                <View style={styles.comments}>
                  <AuthorRow content={blog} avatarSize='small' showAvatar={true}/>
                  <Text style={styles.commentDescription}>Best Tutorial I have ever seen in my life. Keep up the good work</Text>
                </View>
                <View style={styles.comments}>
                  <AuthorRow content={blog} avatarSize='small' showAvatar={true}/>
                  <Text style={styles.commentDescription}>Got no words to say. Just amazing</Text>
                </View>
                <View style={styles.comments}>
                  <AuthorRow content={blog} avatarSize='small' showAvatar={true}/>
                  <Text style={styles.commentDescription}>For newbies, this is more than enough</Text>
                </View>
                <View style={styles.comments}>
                  <AuthorRow content={blog} avatarSize='small' showAvatar={true}/>
                  <Text style={styles.commentDescription}>I couldn't say this tutorial isn't worth</Text>
                </View>                
            </View>
          </ScrollView>
          {this.renderClaps()}
          <TouchableOpacity
            onPress={() => this.clap()}
            onPressIn={() => this.keepClapping}
            activeOpacity={0.6}
            style={styles.clapbutton} >
            <Image style={styles.clap} source={require("../../../utils/clap_image.png")} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  comments: {
   display: 'flex', 
   flexDirection: 'row',
   alignItems: 'center',
   marginVertical: 10
  },
  clapText: {
    color: "white",
    fontSize: 20
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '700',
    marginBottom: 15
  },
  description: {
    fontSize:16,
    paddingVertical: 10,
    lineHeight: 26,
  },
  commentDescription: {
    fontSize: 16,
    lineHeight: 20,
    marginHorizontal: 10
  },
  clapbutton: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#ecf0f1",
    borderColor: '#27597b',
    borderWidth: 3,
    bottom: 20,
    right: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  clap: {
    height: 60,
    width: 50
  }
});

export default withNavigation(Detail)