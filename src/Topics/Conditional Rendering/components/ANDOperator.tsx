import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ANDOperator = () => {
    const groceries = ['milk', 'eggs', 'bread']

  return (
    <View>

        <Text>Cart 🛒</Text>

        {groceries.length > 0 && (
            <Text>You have {groceries.length} in your cart</Text>
        )
        }

        <FlatList
        data={groceries}
        renderItem={({ item, index }) => <Text>{index+1}. {item}</Text>}
        />

    </View>
  )
}

export default ANDOperator