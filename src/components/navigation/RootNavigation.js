
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


  