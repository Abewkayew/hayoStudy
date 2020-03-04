import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Gallery from "react-photo-gallery";

import TitleHeader from '../../common/TitleHeader';
import UserAvatar from '../home/UserAvatar';
import ProvideAnswerButton from '../question/ProvideAnswerButton';
import AnswersList from './AnswersList';
import Title from '../home/Title';

class Answer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { navigation } = this.props;
        const question = navigation.getParam('question');
        // const photos = [
        //       {
        //         src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        //         width: 300,
        //         height: 200
        //       },
        //   ];
          
        return (
            <>
              <TitleHeader iconName='arrow-left' title='Answers'/>
              <ScrollView
               showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                <Title title={question.title}/>
                {/* <Gallery photos={photos}/> */}
                {
                  question.questionImage && (
                      <Image
                        source={{uri: question.questionImage}}
                        style={{height: 80, width: '100%'}}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                    )
                }                
                <Text style={{marginVertical: 8}}>{question.description}</Text>
                <Text style={{fontWeight: '700'}}>Answers</Text>
                
                  {
                      question.answers && (
                          question.answers.map((answer) => {
                              return(
                                <>
                                    <AnswersList answer={answer} key={answer.id}/>
                                </>
                              )
                          })
                      )
                  }
              </View>
              </ScrollView>                      
              <ProvideAnswerButton textValue='Provide your own Answer' question={question}/>
            </>
          );
       }
    };

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      marginHorizontal: 15
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '700',
      marginLeft: 10
    },
    containAnswers: {
        flexDirection: 'row',
        marginVertical: 5,
    }
});

export default withNavigation(Answer);
