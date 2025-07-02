import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const UpdateObjects = () => {

    const [movies, setMovies] = useState({
        title: 'Inception',
        rating: 9.5,
    });

    const ratingUpdate = () => {
        setMovies({...movies, rating: 9.2})
    }

  return (
    <View>
        <Text>Movie Title: {movies.title}</Text>
        <Text>Rating: {movies.rating}</Text>

        <Button title='Update Rating' onPress={ratingUpdate}/>

    </View>
  )
}

export default UpdateObjects