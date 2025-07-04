import { View, Text } from 'react-native'
import React from 'react'
import WithoutState from './components/Basic Counter/withoutState'
import WithState from './components/Basic Counter/withState'
import UpdatingArrays from './components/Updating Arrays/UpdatingArrays'
import UpdateObjects from './components/Update Objects/UpdateObjects'
import SharedState from './components/Sharing State/SharedState'

const UseState = () => {
  return (
    <View>
        {/* <WithoutState />
        <WithState/> */}
        {/* <UpdatingArrays /> */}
        {/* <UpdateObjects/> */}
        <SharedState/>
    </View>
  )
}

export default UseState