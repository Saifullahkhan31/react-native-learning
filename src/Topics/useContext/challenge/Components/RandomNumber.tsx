import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { RandomNumberContext } from '../Context/RandomNumberContext'

const RandomNumber = () => {
    const context = useContext(RandomNumberContext)

    if(!context) {
        throw new Error('RandomNumberContext must be used within a RandomNumberProvider')
    }

    const { num } = context
    
  return (
    <View>
      <Text>Number List:</Text>

    <FlatList
        data={num}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
            <Text>
                {item}
            </Text>}
    />

    </View>
  )
}

export default RandomNumber