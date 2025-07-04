import { View, Text, Button } from 'react-native'
import React from 'react'

interface SharedComponentProps {
    count: number,
    onClickHandler: () => void
}

const Component2 = ({count, onClickHandler}: SharedComponentProps) => {
  return (
    <View>
      <Text>Component2</Text>

    <Text>Count: {count}</Text>

    <Button title='Press Me' onPress={onClickHandler}/>

    </View>
  )
}

export default Component2