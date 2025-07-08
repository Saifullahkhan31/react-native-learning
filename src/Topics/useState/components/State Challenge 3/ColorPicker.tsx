import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

const ColorPicker = () => {

    const [color, selectedColor] = useState("#FFF");

  return (
    <View >

        <Text style={styles.title}>Pick a Color</Text>

        <View style={[styles.colorOptionsContainer]}>
        {colors.map((color) => (
            <TouchableOpacity style={[styles.colorBox, { backgroundColor: color }]}
            key={color}
            onPress={() => selectedColor(color)} />
        ))}
        </View>

        <Text style={{fontSize: 18, fontWeight: 'bold'}} > Your Color:</Text>

        <View style={[styles.colorContainer,   { backgroundColor: color }]} >

        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    colorOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        height: 80,
        alignItems: 'center',
        
    },
    colorContainer: {
        marginVertical: 15,
        height: 200,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
    },
    colorBox: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 25,
    }
})

export default ColorPicker