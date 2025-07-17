import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

interface fetchingProps {
    id: number;
    name: string;
    username: string;
    address: {
        city: string;
    };
    website: string;
}

const DataFetching = () => {

    const [data, setData] = useState<fetchingProps[]>([])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
            const result = await response.json()
            setData(result)
        }

        try {
            fetchData()
        } catch (error) {
            console.log('Error fetching data:', error)
        }

    }, [])

  return (
    <View>
      <Text>Data Fetching</Text>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.username}</Text>
            <Text>{item.address.city}</Text>
            <Text>{item.website}</Text>
        </View>
      )}
      />
    </View>
  )
}

export default DataFetching