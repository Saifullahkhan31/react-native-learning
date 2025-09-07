import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { RandomNumberContext } from '../Context/RandomNumberContext'

const AddRandomNumber = () => {
    const context = useContext(RandomNumberContext);

    if (!context) {
        throw new Error('RandomNumberContext must be used within a RandomNumberProvider');
    }

    const { addNumber } = context;

    const handleAddNumber = () => {
        const randomNum = Math.floor(Math.random() * 100);
        addNumber(randomNum);
    }
    

  return (
    <View>
      <Button title="Add Number" onPress={handleAddNumber} />
    </View>
  )
}

export default AddRandomNumber