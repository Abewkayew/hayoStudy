import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import WriteAnswer from './WriteAnswer';
import { Image, Card } from 'react-native-elements';
import UserInput from '../home/comment/UserInput';
import CommonButton from '../../common/CommonButton';
import AuthorRow from '../home/AuthorRow';
import ProvideAnswerButton from './ProvideAnswerButton';
import Title from '../home/Title';

class QuestionContent extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        showAnswerInput: false
      }
   }

   handleViewAnswer(question) {
       this.props.navigation.navigate('Answer', {
           question: question
       })
   }

   handleAnswerClick(question) {
       this.props.navigation.navigate('Answer', {
           question: question
       })
   }   

   handleProvideAnswer(question){
        this.props.navigation.navigate('AnswerQuestion', {
            question: question
        });
   }
      
   render(){
    const {questions} = this.props
    const { showAnswerInput } = this.state;
    const avatarSize = 'small'
    const showAvatar = true;
    return (
     <>
        <View style={styles.container}>
        {
            questions.map((question) => {
                return(
                    <Card
                      containerStyle={{width: '100%', marginVertical: 5, paddingVertical: 5,
                      paddingHorizontal: 5, backgroundColor: '#f0f0ed', borderColor: '#f0f0ff',
                      borderWidth: 1, borderRadius: 10, elevation: 5}}
                      key={question.id}>
                        <AuthorRow content={question} avatarSize={avatarSize}/>
                        <TouchableNativeFeedback
                          onPress={() => this.handleAnswerClick(question)}>
                            <Title title={question.title}/>
                            {
                                question.questionImage && (
                                <Image
                                    source={{uri: question.questionImage}}
                                    style={{height: 80, width: '100%'}}
                                    PlaceholderContent={<ActivityIndicator />}
                                    />
                                )
                            }
                            <Text style={{marginVertical: 10, fontSize: 16}}>{question.description}</Text>
                        </TouchableNativeFeedback>
                        <View
                         style={{marginVertical: 10, flexDirection: 'row',
                                justifyContent:  'space-between', alignItems: 'center'}}>
                            {/* <ProvideAnswerButton textValue='Provide Answer' question={question}/> */}
                            <TouchableOpacity 
                                onPress={() => this.handleProvideAnswer(question)}
                                style={styles.question}>
                                    <Text style={styles.answerCount}>Provide answer</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: '#808080', width: 1, height: 25}}></View>
                            <TouchableOpacity 
                              onPress={() => this.handleViewAnswer(question)}
                              style={styles.question}>
                                <Text style={styles.answerCount}>{question.answers.length} answers</Text>
                            </TouchableOpacity>
                            <View style={{backgroundColor: '#808080', width: 1, height: 25}}></View>
                            <TouchableOpacity
                                style={{borderRadius: 5, padding: 4, display: 'flex', 
                                flexDirection: 'row'}}
                                onPress={() => this.handleViewAnswer(question)}>
                                   <>
                                    <Icon
                                            name='eye'
                                            type='font-awesome'
                                            color='#808080'
                                            size={20}
                                            onPress={() => {}}
                                            containerStyle={{ marginTop: 20 }}
                                        />                                            
                                      <Text style={styles.answerCount}>{question.viewCount}</Text>
                                   </>
                            </TouchableOpacity>
                        </View>                            
                    </Card>
                )
            })
        }     
        </View>
        </>
    );
   }
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    text: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10
    },
    answerCount: {
        fontSize: 16,
        marginLeft: 5,
        color: '#808080',
    },
    question: {
        paddingHorizontal: 10,
        elevation: 1
    }
});

export default withNavigation(QuestionContent);


