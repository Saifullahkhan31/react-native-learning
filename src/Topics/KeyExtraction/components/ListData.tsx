import { View, Text, FlatList} from 'react-native'
import React from 'react'

const ListData = () => {
    const fruits = ["apple ", "banana ", "orange"]

  return (
    <View>
      <FlatList 
      data={fruits} 
      keyExtractor={(item) => item}
      renderItem={({item}) => {
        return ( 
            <Text style={{marginLeft: 20, marginBottom: 10}}>{item}</Text>
        )
      }} />
    </View>
  )
}

export default ListData