import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import { Alert } from "react-native";

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description";

  return (
    <View>
      {/* https://unsplash.com/photos/red-lamborghini-gallardo-uwrTwMaxVR4 */}
      <Image
        source={require("../assets/IoBM.png")}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text style={styles.heading}>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescription}</Text>
      <Text style={styles.pill}>{price}</Text>
      <Button title="Add to cart" onPress={() => Alert.alert("Button Pressed!")} />

        <Pressable onPress={() => Alert.alert('More Info Pressed!')}>
            <Text>Tap to learn more</Text>
            </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    pill: {
        backgroundColor: 'black',
        color: 'white',
        padding: 15,
        marginLeft: 160,
        marginTop: 15,
        marginBottom: 10,
        width: 90,
        borderRadius: 20,
        textAlign: 'center',
    },

    heading: {
        fontSize: 20,
        marginBottom: 10,
    }
})

export default CarComponent;