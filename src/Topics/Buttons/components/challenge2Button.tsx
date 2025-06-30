import { View, Button, StyleSheet, Alert } from 'react-native'
import React from 'react'

const Challenge2Button = () => {
  return (
    <View>
      <Button title='Press me' onPress={() => Alert.alert('Button pressed!')}/>

    <View style={styles.fixToText}>
    {/* <Button
      title="Left button"
      onPress={() => Alert.alert('Left button pressed')}
    />
    <Button
      title="Right button"
      onPress={() => Alert.alert('Right button pressed')}
    /> */}
  </View>
  </View>

  )
}

const styles = StyleSheet.create({
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      padding: 10,
    },
  });

export default Challenge2Button