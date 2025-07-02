import { View, Text, Button } from 'react-native'
import React from 'react'
import {useState} from 'react'

const WithState = () => {

    const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>WithState</Text>
      <Text>Counter: {counter}</Text>

    <View style={{marginBottom:10}}/>
      <Button title='Increment' onPress={() => setCounter(counter + 1)}/>
    <View/>

    <View style={{width:20, marginTop:1}}/>
      <Button title='Decrement' onPress={() => setCounter(counter - 1)}/>
    <View/>

    </View>
  )
}

export default WithState