import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyEffect = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.warn('useEffect called');
    }, [count1]) // If we had not provided a dependency array, it would run on every render. Check notes

  return (
    <View>
        
    <Text>count1: {count1} </Text>
    <Button title='Increment count 1' onPress={() => setCount1(count1 + 1)} />

    <Text>count2: {count2} </Text>
    <Button title='Increment count 2' onPress={() => setCount2(count2 + 1)} />

    </View>
  )
}

export default MyEffect