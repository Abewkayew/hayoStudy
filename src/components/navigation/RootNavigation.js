
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../students/home/Home';
import Detail from '../students/Detail/Detail';
import Profile from '../Profile/Profile';
import Winners from '../students/winner/Winners';
import SelectQuestionType from '../students/question/SelectQuestionType';
import AskQuestion from '../students/question/AskQuestion';
import Registration from '../registration/Register';
import RegisterForm from '../registration/RegisterForm';
import SuccessRegistration from '../registration/SuccessRegistration';
import MoreInfo from '../registration/MoreInfo';
import ParticipateLive from '../students/winner/ParticipateLive';
import EditProfile from '../Profile/EditProfile';
import UserDetail from '../students/Detail/UserDetail'
import Question from '../students/question/Question';
import Tutorial from '../students/home/Tutorial';
import AnswerQuestion from '../students/question/AnswerQuestion';
import Answer from '../students/Answer/Answer';
import Header from '../students/home/Header';
import Notification from '../students/home/notification/Notification';
import UserTutorial from '../students/home/notification/UserTutorial';
import Teacher from '../teachers/Home/Teacher';

export const RootStack = createStackNavigator(
   {
      Home: {
        screen: Home,
      },
      Details: {
        screen: Detail,
      },
      Profile: {
        screen: Profile,
      },
      SelectQuestionType: {
        screen: SelectQuestionType
      },
      AskQuestion: {
        screen: AskQuestion
      },
      Registration: {
        screen: Registration
      },
      RegisterForm: {
        screen: RegisterForm
      },
      SuccessRegistration: {
        screen: SuccessRegistration
      },
      MoreInfo: {
        screen: MoreInfo
      },
      Winners: {
        screen: Winners
      },
      ParticipateLive: {
        screen: ParticipateLive
      },
      EditProfile: {
        screen: EditProfile
      },
      UserDetail: {
        screen: UserDetail
      },
      Question: {
        screen: Question
      },
      Tutorial: {
        screen: Tutorial
      },
      AnswerQuestion: {
        screen: AnswerQuestion
      },
      Answer: {
        screen: Answer
      },
      Header: {
        screen: Header
      },
      Notification: {
        screen: Notification
      },
      UserTutorial: {
        screen: UserTutorial
      },
      Teacher: {
        screen: Teacher
      }
    },
    {
      initialRouteName: 'Registration',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  );


  