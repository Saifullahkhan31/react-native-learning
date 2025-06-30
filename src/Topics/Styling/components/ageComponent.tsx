import { View, Text } from 'react-native'
import React from 'react'
import st from '../../../style'

const AgeComponent = () => {
  return (
    <View style={st.shadowStyle}>
      <Text style={st.textStyle}>My age is 21</Text>
    </View>
  )
}

export default AgeComponent