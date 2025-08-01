import { View, Text } from 'react-native'
import React from 'react'

const ValidPass = () => {
    return <Text>Valid Password</Text>
}

const InvalidPass = () => {
    return <Text>Invalid Password</Text>
}

type PasswordProps = {
  isValid: boolean;
}


const Password = ({isValid}: PasswordProps) => {
    // if (isValid) {
    //     return <ValidPass />
    // }
    // return <InvalidPass />

    return isValid ? <ValidPass/> : <InvalidPass/>
}

const TernaryOperator = () => {
  return (
    <View>
      <Password isValid={true}/>
    </View>
  )
}

export default TernaryOperator