import React, { Component } from 'react';
import { View, Alert, Modal } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Avatar, Badge, Icon } from "react-native-elements";


const BottomNavigation = (props) => {
    const { menuColor, profileColor, favoriteColor, notificationColor } = props;
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#1c396d',
            height: 200
        }}>
            <View style={{
                position: 'absolute', alignSelf: 'center',
                backgroundColor: '#f8f4f4', width: 70, height: 70, borderRadius: 35,
                bottom: 25, zIndex: 10
            }}>
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
            <View style={{
                position: 'absolute', backgroundColor: '#27597b',
                bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row',
                justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Header')}>
                        <Icon
                            name='home'
                            type='material'
                            color={menuColor}
                            size={28}
                            onPress={() => { }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Winners')}>
                        <Icon
                            name='trophy'
                            type='font-awesome'
                            color={favoriteColor}
                            size={25}
                            onPress={() => { }}
                            containerStyle={{ marginHorizontal: 25 }}
                        />
                        <Badge
                            value="11+"
                            containerStyle={{ position: 'absolute', top: .5, right: .5 }}
                            badgeStyle={{ backgroundColor: '#f80' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
                        <Icon
                            name='bell'
                            type='font-awesome'
                            color={notificationColor}
                            size={25}
                            onPress={() => { }}
                            containerStyle={{ marginHorizontal: 25 }}
                        />
                        <Badge
                            value="153+"
                            containerStyle={{ position: 'absolute', top: .5, right: .5 }}
                            badgeStyle={{ backgroundColor: '#f80' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                        <FontAwesomeIcon style={{ marginHorizontal: 10 }} name="user"
                            size={25} color={profileColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}

export default withNavigation(BottomNavigation);