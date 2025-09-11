import { View, Text, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import useFormInput from '../Hooks/useFormInput'

const MyForm = () => {
    const nameInput = useFormInput("")
    const emailInput = useFormInput("")
    
    // State to store submitted entries
    const [submittedData, setSubmittedData] = useState<{ id: string; name: string; email: string }[]>([])

    const handleSubmit = () => {
        console.log("Name: ", nameInput.value)
        console.log("Email: ", emailInput.value)
        
        // Create new entry object
        const newEntry = {
            id: Date.now().toString(),
            name: nameInput.value,
            email: emailInput.value
        }
        
        // Add to submitted data array
        setSubmittedData(prev => [...prev, newEntry])
        
        // Don't clear inputs - let user modify and resubmit
    }

    return (
        <View style={{padding: 20}}>
            {/* Form Section */}
            <Text>Name: </Text>
            <TextInput
                value={nameInput.value}
                onChangeText={nameInput.onChange}
                placeholder='Enter your name'
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
            />

            <Text>Email: </Text>
            <TextInput
                value={emailInput.value}
                onChangeText={emailInput.onChange}
                placeholder='Enter your email'
                style={{borderWidth: 1, padding: 10, marginBottom: 10}}
            />

            <Button title='Submit' onPress={handleSubmit} />

            {/* Display Section */}
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
                Submitted Details:
            </Text>
            
            <FlatList 
                data={submittedData}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={{padding: 10, borderBottomWidth: 1}}>
                        <Text>Name: {item.name}</Text>
                        <Text>Email: {item.email}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default MyForm