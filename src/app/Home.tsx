import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View>
      <Link href="/Index" >Back</Link>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Home