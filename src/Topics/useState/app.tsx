import { View, Text } from 'react-native'
import React from 'react'
import WithoutState from './components/Basic Counter/withoutState'
import WithState from './components/Basic Counter/withState'
import UpdatingArrays from './components/Updating Arrays/UpdatingArrays'

const UseState = () => {
  return (
    <View>
        {/* <WithoutState />
        <WithState/> */}
        <UpdatingArrays />
    </View>
  )
}

export default UseState