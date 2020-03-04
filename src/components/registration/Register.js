import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import {Card, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


import { withNavigation } from 'react-navigation';

class Register  extends React.Component{
  constructor(props){
    super(props);
    // some datas for toggling purpose
    this.state = {
      selectedStudent: false,
      selectedTeacher: false,
      selectedTutor: false,
      selectedParent: false,
      showNextButton: false,
    }
  }

  navigateToNextPage(pageName){
    setTimeout(() => {
      this.props.navigation.navigate(pageName)
    }, 1000)
  }


  handleSelect(selectedUser){

    if(selectedUser === 'student'){
      this.setState({
        selectedStudent: !this.state.selectedStudent,
        selectedTeacher: false,
        selectedTutor: false,
        selectedParent: false,
        showNextButton: !this.state.showNextButton
      })
      this.navigateToNextPage('RegisterForm')

    }else if(selectedUser === 'teacher'){
      this.setState({
        selectedStudent: false,
        selectedTeacher: !this.state.selectedTeacher,
        selectedTutor: false,
        selectedParent: false,
        showNextButton: !this.state.showNextButton
      })
      this.navigateToNextPage('TeacherRegistration')

    }else if(selectedUser === 'tutor'){
      this.setState({
        selectedStudent: false,
        selectedTeacher: false,
        selectedTutor: !this.state.selectedTutor,
        selectedParent: false,
        showNextButton: !this.state.showNextButton
      })
      this.navigateToNextPage('RegisterForm')

    }else if(selectedUser === 'parent'){
      this.setState({
        selectedStudent: false,
        selectedTeacher: false,
        selectedTutor: false,
        selectedParent: !this.state.selectedParent,
        showNextButton: !this.state.showNextButton
      })
      this.navigateToNextPage('ParentRegistration')      
    }

  }

  render(){
    const {selectedStudent, selectedTeacher, selectedTutor, selectedParent, showNextButton} = this.state;

    return (
      <>               
          <ScrollView>
           <View style={styles.container}>
            <Text style={styles.styleText}>I AM A</Text>
            <TouchableOpacity
             style={[selectedStudent ? styles.selectedButton : styles.buttonStyle, {flex: 1, flexDirection: 'row'}]}
             onPress={() =>  this.handleSelect('student')}>
                <Text style={ selectedStudent ? styles.selectedTextStyle : styles.textStyle}>Student</Text>
                <View style={{marginLeft: 20}}>
                  <Icon
                    name='check-circle'
                    type='font-awesome'
                    color='#fff'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
             style={[selectedTeacher ? styles.selectedButton : styles.buttonStyle, {flex: 1, flexDirection: 'row'}]}
             onPress={() =>  this.handleSelect('teacher')}>
                <Text style={ selectedTeacher ? styles.selectedTextStyle : styles.textStyle}>Teacher</Text>
                <View style={{marginLeft: 20}}>
                  <Icon
                    name='check-circle'
                    type='font-awesome'
                    color='#fff'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
             style={[selectedTutor ? styles.selectedButton : styles.buttonStyle, {flex: 1, flexDirection: 'row'}]}
             onPress={() =>  this.handleSelect('tutor')}>
                <Text style={ selectedTutor ? styles.selectedTextStyle : styles.textStyle}>Tutor</Text>
                <View style={{marginLeft: 20}}>
                  <Icon
                    name='check-circle'
                    type='font-awesome'
                    color='#fff'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
             style={[selectedParent ? styles.selectedButton : styles.buttonStyle, {flex: 1, flexDirection: 'row'}]}
             onPress={() =>  this.handleSelect('parent')}>
                <Text style={ selectedParent ? styles.selectedTextStyle : styles.textStyle}>Parent</Text>
                <View style={{marginLeft: 20}}>
                  <Icon
                    name='check-circle'
                    type='font-awesome'
                    color='#fff'
                    size={20}
                    onPress={() => {}}
                    containerStyle={{ marginTop: 20 }}
                  />
                </View>
             </TouchableOpacity>
            </View>
          </ScrollView>
      </>
    );
  }

};

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
     },
     selectedButton: {
        backgroundColor: '#1c396d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,      
        borderBottomWidth: 1,
        borderWidth: 1,
        borderColor: '#1c396d',
        marginVertical: 6,
        borderBottomColor: '#f80',
        borderBottomWidth: 3
     },
     selectedTextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 12,
      fontWeight: '500',
      fontStyle: 'normal',
     },
     textStyle: {
      textAlign: 'center',
      fontSize: 20,
      marginVertical: 12,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    styleText: {
      fontSize: 24,
      fontWeight: '700',
      alignSelf: 'center',
      marginVertical: 10
    },
    buttonStyle: {
      justifyContent: 'center',
      borderRadius: 15,      
      borderBottomWidth: 1,
      borderWidth: 1,
      borderColor: '#1c396d',
      marginVertical: 6,
      alignItems: 'center'
    },
    bottomNav: {
      marginTop: 80
    },
    styleInsideButtonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default withNavigation(Register);
