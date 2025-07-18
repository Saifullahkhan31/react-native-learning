import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const SeaFoodMeals = () => {
  const [food, setFood] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    
      const foodMealFetch = async () => {
        try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const result = await response.json();
        setFood(result.meals);
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
    foodMealFetch();
  }, []);

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>
  }
  if (error) {
    return <Text style={styles.text}>Error: {error}</Text>
  }

  return (
    <View>
      {/* <Text style={styles.header}>Sea Food Meals Course Challenge</Text> */}
      <FlatList
        data={food}
        keyExtractor={(item: any) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.mealContainer}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
            <Text style={styles.title}>{item.strMeal}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 30,
  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
});

export default SeaFoodMeals;