
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

import VideoPlayer from 'react-native-video-player';

import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';



class BlogVideo extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        video: {
            width: undefined,
            height: undefined,
            duration: undefined
        },
        currentTime: 0,
        duration: 0,
        isFullScreen: false,
        isLoading: true,
        paused: false,
        playerState: PLAYER_STATES.PLAYING,
        screenType:'cover'       

      }     
  }


  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };
  
  onProgress = data => {
  const { isLoading, playerState } = this.state;
  // Video Player will continue progress even if the video already ended
  if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    this.setState({ currentTime: data.currentTime });
    }
  };
 
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
 
  onLoadStart = data => this.setState({ isLoading: true });
 
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
 
  onError = () => alert('Oh! ', error);
 
  exitFullScreen = () => {
      alert("Exit full screen");
    };

  enterFullScreen = () => {};
  
  onFullScreen = () => {
      if(this.state.screenType=='content')
        this.setState({screenType:'cover'});
    else
        this.setState({screenType:'content'});
    };

  renderToolbar = () => (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );

  onSeeking = currentTime => this.setState({ currentTime });



  render(){
    const { thumbnailUrl, videoUrl } = this.props;
    return (
        <>
          <View style={styles.container}>           
            <Video
              onEnd={this.onEnd}
              onLoad={this.onLoad}
              onLoadStart={this.onLoadStart}
              onProgress={this.onProgress}
              paused={this.state.paused}
              ref={videoPlayer => (this.videoPlayer = videoPlayer)}
              resizeMode={this.state.screenType}
              onFullScreen={this.state.isFullScreen}
              source={{ uri: videoUrl }} 
              style={styles.mediaPlayer}
              volume={10}
              playInBackground={false}
              repeat={true}
            />
          
            <MediaControls
              duration={this.state.duration}
              isLoading={this.state.isLoading}
              mainColor="#333"
              onFullScreen={this.onFullScreen}
              onPaused={this.onPaused}
              onReplay={this.onReplay}
              onSeek={this.onSeek}
              onSeeking={this.onSeeking}
              playerState={this.state.playerState}
              progress={this.state.currentTime}
              toolbar={this.renderToolbar()}
            />
         </View>
        </>
      );
  }
};

const styles = StyleSheet.create({
    container: {
      marginVertical: 10
    },
    text: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: 'bold'
    },
    mediaPlayer: {
      width: '100%',
      height: 200,
      backgroundColor: '#27597b'
    },
});

export default BlogVideo;
