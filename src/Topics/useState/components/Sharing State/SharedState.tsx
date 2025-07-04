import { View, Text } from 'react-native'
import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import { useState } from 'react'

const SharedState = () => {

    const [count, setCount] = useState(0)

  return (
    <View>
      <Component1 count={count} onClickHandler={() => setCount(count + 1) } />



      <Component2 count={count} onClickHandler={() => setCount(count + 1) } />
    </View>
  )
}

export default SharedState