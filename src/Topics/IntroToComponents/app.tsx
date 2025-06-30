import { View, Text } from 'react-native'
import React from 'react'
import NameComponent from './components/NameComponent'
import UserName from './components/userName'
import FavCourse from './components/favCourse'

const IntroToComponents = () => {

    return (
        <View>
            <NameComponent/>
            <UserName/>
            <FavCourse/>
        </View>
    )

}

export default IntroToComponents