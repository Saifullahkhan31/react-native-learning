import { View, Text } from 'react-native'
import React from 'react'
import AgeComponent from './components/ageComponent'
import ArrayOfObject from './components/ArrayOfObject'
import HobbyComponent from './components/hobbyComponent'

const app = () => {
  return (
    <View>
      <AgeComponent/>
      <ArrayOfObject/>
      <HobbyComponent/>
      
    </View>
  )
}

export default app