import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
        <Text>My Button Component</Text>
        <Pressable onPress={() => console.log('Button Pressed!')}>
            <Text style={{color: 'teal', fontSize: 20, fontWeight: 'bold'
            }}>A Button</Text>
        </Pressable>

        <Pressable onPressIn={() => console.log('In Button Pressed!')}>
        <Text style={{color: 'blue', fontSize: 20, fontWeight: 'bold'
            }}>A Button</Text>
        </Pressable>

        <Pressable onPressOut={() => console.log('Out Button Pressed!')}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'
            }}>A Button</Text>
        </Pressable>

        <Pressable onLongPress={() => console.log('Long Button Pressed!')}>
        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'
            }}>A Button</Text>
        </Pressable>
        
    </View>
  )
}

export default ButtonComponent