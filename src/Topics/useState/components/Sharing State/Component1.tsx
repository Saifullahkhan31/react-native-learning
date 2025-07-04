import { View, Text, Button } from 'react-native'
import React from 'react'

interface SharedComponentProps {
    count: number,
    onClickHandler: () => void
}

const Component1 = ({count, onClickHandler}: SharedComponentProps) => {
  return (
    <View>
      <Text>Component1</Text>

    <Text>Count: {count}</Text>
    <Button title='Press Me' onPress={onClickHandler}/>

    </View>
  )
}

export default Component1