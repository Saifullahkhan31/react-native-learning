import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdatingArrays = () => {

    const [friends, setfriends] = useState(['Alice', 'Bob', 'Charlie']);

    const addFriend = () => setfriends([...friends, 'Saifullah'])

    const removeFriend = () => setfriends(friends.filter(f => f !== 'Saifullah'))

    const updateFriend = () => setfriends(friends.map(f => f == 'Saifullah' ? 'Saifullah Khan' : f))

  return (
    <View>
      
    <FlatList
    data={friends}
    keyExtractor={(friend) => friend}
    renderItem={({item}) => <Text>{item}</Text>}
    />

    <Button title='Add one friend' onPress={addFriend}/>

    <Button title='Remove one friend' onPress={removeFriend}/>

    <Button title='Update friend' onPress={updateFriend}/>

    </View>
  )
}

export default UpdatingArrays