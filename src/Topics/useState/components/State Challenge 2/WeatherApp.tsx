import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


interface WeatherDataProps {
    [key: string]: string;
}

const weatherData: WeatherDataProps = {
    "London": "Cloudy, 15°C",
    "New York": "Sunny, 25°C",
    "Tokyo": "Rainy, 20°C",
    "Sydney": "Windy, 18°C",
}

const WeatherApp = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('')

    const getWeather = () => {
        setWeather(weatherData[city] || "Please add a valid city name");    
    }


  return (
    <View style={styles.container}>

      <Text style={{fontSize: 18, fontWeight: 'bold'}} >Weather App</Text>

      <TextInput style={styles.inputBox} placeholderTextColor={'gray'}
      placeholder='Enter City'
      value={city}
      onChangeText={setCity} />

      <Button title="Get Weather" onPress={getWeather} />

    <Text style={{ marginTop: 15 }}>
        Weather in {city}
    </Text>

      {weather ? <Text style={styles.weatherUpdate} >{weather}</Text> : null }

    </View>
  )
}

const styles = StyleSheet.create( {
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    inputBox: {
        width: '30%',
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
    },
    weatherUpdate: {
        margin: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
    }
})

export default WeatherApp