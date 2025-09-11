import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../Hooks/useFetch'

const WithCustomHooks = () => {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <View>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <Text> {item.title} </Text>}
      />
    </View>
  )
}

export default WithCustomHooks