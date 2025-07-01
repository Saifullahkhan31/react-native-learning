import { View, Text } from 'react-native'
import React from 'react'

const ValidPass = () => {
    return <Text>Valid Password</Text>
}

const InvalidPass = () => {
    return <Text>Invalid Password</Text>
}


const Password = ({isValid}) => {
    if (isValid) {
        return <ValidPass />
    }
    return <InvalidPass />
}

const ConditionalStatement = () => {
  return (
    <View>
      <Password isValid={false}/>
    </View>
  )
}

export default ConditionalStatement