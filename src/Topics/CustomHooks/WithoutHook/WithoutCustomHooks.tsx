import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

interface apiFetchProps {
    id: number,
    title: string
}

const WithoutCustomHooks = () => {

    const [data, setData] = useState<apiFetchProps[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data))
    })

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

export default WithoutCustomHooks