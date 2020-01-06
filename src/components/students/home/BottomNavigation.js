import React, { Component } from 'react';
import { View, Alert, Modal } from 'react-native';
import { Icon } from 'react-native-elements'
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, Badge } from "react-native-elements";


const BottomNavigation = (props) => {
        const {menuColor, profileColor, favoriteColor} = props;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#1c396d',
            }}>
                <View style={{ position: 'absolute', alignSelf: 'center',
                   backgroundColor: '#f8f4f4', width: 70, height: 70, borderRadius: 35,
                    bottom: 25, zIndex: 10 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SelectQuestionType')}>
                        <Icon
                            name='add'
                            type='material'
                            color='#f80'
                            containerStyle={{ alignSelf: 'center' }}
                            reverse
                            size={28}
                        />
                    </TouchableOpacity>
                    
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#27597b', 
                  bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', 
                  justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15 }}>
                      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Icon
                            name='home'
                            type='material'
                            color={menuColor}
                            size={28}
                            onPress={() =>{}}
                        />
                       </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Winners')}>  
                            <Icon
                                name='trophy'
                                type='font-awesome'
                                color={favoriteColor}
                                size={25}
                                onPress={() => {}}
                                containerStyle={{ marginHorizontal: 16 }}
                            />
                            <Badge
                                status="warning"
                                value="3+"
                                containerStyle={{ position: 'absolute', top: -2, right: -2 }}
                                />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <FontAwesomeIcon style={{marginHorizontal: 10}} name="user"
                            size={25} color={profileColor}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );

}

export default withNavigation(BottomNavigation);