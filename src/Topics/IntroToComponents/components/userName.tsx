import { View, Text } from 'react-native'
import React from 'react'
import stylingSheet from '@/src/style'

const UserName = () => {
  return (
    <View style={stylingSheet.shadowStyle}>
      <Text style={stylingSheet.textStyle}>My username is saifullah31</Text>
    </View>
  )
}

export default UserName