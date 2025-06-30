import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ImgComponent = () => {
  return (
    <View style={style.container}>
      {/* <Text>Lets import Images</Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Importing Local Images:
        </Text>

        <Image source={ require('../assets/IoBM.png')}
        style={{width: 200, height: 200}}
        
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Importing Images from URL:
        </Text> */}
        
        <Image style={style.imageStyle} source={{uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHX7HrE9id2Mg/profile-displayphoto-shrink_200_200/B4DZc1bldzHwAY-/0/1748948114608?e=2147483647&v=beta&t=b0DSe0x3FMUvLTnZIqfulKOERO4MA_6Bl7kEh01I3tQ'}}
        // style={{width: 200, height: 200}}
        // borderRadius={100}
        />

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    paddingBottom: 5,
    alignItems: 'center',
    margin: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.65,
    elevation: 0,
},

  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    elevation: 5,
}
})

export default ImgComponent