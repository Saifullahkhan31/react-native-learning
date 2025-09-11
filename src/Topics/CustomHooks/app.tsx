import { View, Text } from 'react-native'
import React from 'react'
import WithoutCustomHooks from './WithoutHook/WithoutCustomHooks'
import WithCustomHooks from './WithCustomHooks/withCustomHooks'
import MyForm from './HookChallenge/MyForm'

const CustomHooks = () => {
  return (
    <View>
      {/* <WithoutCustomHooks/> */}
      {/* <WithCustomHooks/> */}
      <MyForm/>
    </View>
  )
}

export default CustomHooks