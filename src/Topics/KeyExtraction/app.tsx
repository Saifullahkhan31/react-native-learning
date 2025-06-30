import { View, Text } from 'react-native'
import React from 'react'
import ListData from './components/ListData'

const keyExtractor = () => {
  return (
    <View>
      <ListData/>
    </View>
  )
}

export default keyExtractor