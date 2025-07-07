import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

// const Toggler = () => {

//     const [toggle, setToggle] = useState('On')

//     const toggleHandler = () => {
//         setToggle(prevToggle => prevToggle == 'On' ? 'Off' : 'On')
//     }

//   return (
//     <View>
//     <Text>Toggle is: {toggle}</Text>

//     <Button title="On/Off" onPress={toggleHandler} />

//     </View>
//   )
// }



// Another way to approach this problem:

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(false)

    return (
        <View>

        <Text> Toggle is: {isOn ? 'On' : 'Off'} </Text>

        <Button title='Toggle' onPress={() => setIsOn(!isOn)} />

        </View>

    )
}

export default ToggleButton