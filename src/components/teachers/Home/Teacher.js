import React, { Component } from 'react'
import {
    Text
} from 'react-native'

import {withNavigation} from 'react-navigation'

class Teacher extends Component {
    render() {
        return (
            <>
              <Text>Hi Teacher: Here are list of things you can do in advance</Text>
              <Text>Create Class: Private class or Public class</Text>
              <Text>Invite students to join class so that you as teacher start sharing
                    tutorial guides, reference materials, books and any other advices that could help students
                    go one step further in creating their future of education
              </Text>
              <Text>Surf jobs for JOBS that is specific to your need</Text>
              <Text>Find students who need tutoring service</Text>
              <Text>Make your profile private or public depending on whether you want students to contact you 
                    for advice or other tutoring HELP.
              </Text>
              
            </>
        )
    }
}

export default withNavigation(Teacher)
