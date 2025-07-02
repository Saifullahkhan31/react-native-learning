import { View, Text } from 'react-native'
import React from 'react'
import WithoutState from './components/Basic Counter/withoutState'
import WithState from './components/Basic Counter/withState'
import UpdatingArrays from './components/Updating Arrays/UpdatingArrays'
import UpdateObjects from './components/Update Objects/UpdateObjects'

const UseState = () => {
  return (
    <View>
        {/* <WithoutState />
        <WithState/> */}
        {/* <UpdatingArrays /> */}
        <UpdateObjects/>
    </View>
  )
}

export default UseState