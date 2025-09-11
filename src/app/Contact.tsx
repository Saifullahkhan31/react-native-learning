import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View>
        <Link href="/Index" >Back</Link>
      <Text>Contact Screen</Text>
    </View>
  )
}

export default Contact