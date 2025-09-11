import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View>
        <Link href="/Index" >Back</Link>
      <Text>About Screen</Text>
    </View>
  )
}

export default About