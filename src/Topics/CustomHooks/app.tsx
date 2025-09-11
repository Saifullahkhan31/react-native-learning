import { View, Text } from 'react-native'
import React from 'react'
import WithoutCustomHooks from './WithoutHook/WithoutCustomHooks'
import WithCustomHooks from './WithCustomHooks/withCustomHooks'

const CustomHooks = () => {
  return (
    <View>
      {/* <WithoutCustomHooks/> */}
      <WithCustomHooks/>
    </View>
  )
}

export default CustomHooks