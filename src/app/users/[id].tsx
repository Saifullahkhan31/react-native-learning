import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const Users = () => {
    const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>Users Screen</Text>
      <Text>User - {id}</Text>
    </View>
  )
}

export default Users