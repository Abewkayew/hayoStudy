
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

import {notice} from '../../../utils/mock_data/data'
import UserAvatar from '../home/UserAvatar';
import AuthorRow from '../home/AuthorRow';
import CommonButton from '../../common/CommonButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';


const AnswersList = (props) => {
  const { answer } = props;
  const avatarSize = 'small';


  return (
    <>
        <View style={styles.containAnswers} key={answer.answer}>
            {
                answer.id === 1 && (
                    <View style={styles.containTopAnswer}>
                        <Icon
                            name='check-circle'
                            type='font-awesome'
                            color='#27597b'
                            size={18}
                            onPress={() => {}}
                            containerStyle={{ marginTop: 20 }}
                        />
                        <Text style={styles.topanswer}>Top answer</Text>
                    </View>
                )
            }
            <View style={styles.user}>
                <AuthorRow content={answer} avatarSize={avatarSize}/>
                <Text style={styles.vote}>{answer.upVote} votes</Text>
            </View>

            <Text style={styles.answer}>{answer.answer}</Text>
            <View style={styles.voteButtons}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Upvote</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Downvote</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    containAnswers: {
        backgroundColor: '#f0f0ed',
        borderColor: '#f0f0ff',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 5,
        padding: 5,
        marginVertical: 6,
    },
    vote: {
        color: '#27597b',
        fontSize: 12,
        alignItems: 'center',
        fontWeight: 'bold'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containTopAnswer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    topanswer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27597b',
        marginHorizontal: 5,
    },
    buttonStyle: {        
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        marginVertical: 6,
    },
    answer: {
        marginVertical: 5
    },
    voteButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 14,
        paddingVertical: 5,
        paddingHorizontal: 20,
        color: '#808080'
    },

});

export default withNavigation(AnswersList);

