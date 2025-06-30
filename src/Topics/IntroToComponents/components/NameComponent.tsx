import { View, Text } from 'react-native'
import React from 'react'
import st from '../../../style'

const NameComponent = () => {
  return (
    <View style={st.shadowStyle}>
      <Text style={st.textStyle}>My name is Saifullah Khan</Text>
    </View>
  )
}

export default NameComponent