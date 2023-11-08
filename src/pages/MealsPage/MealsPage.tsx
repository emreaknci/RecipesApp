
import { View, Text, FlatList } from "react-native";
import styles from "./MealsPage.style";
import React, { useState, useEffect } from 'react';
import MealService from "../../services/meal.service";
import MealCardComponent from "../../components/MealCardComponent";
const MealsPage = ({ route, navigation }) => {
  const { categoryName } = route.params;

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    const response = await MealService.filterByCategory(categoryName);
    setMeals(response);
  }


  const renderMeal = (item) => {
    return (
      <MealCardComponent navigation={navigation} meal={item} />
    );
  }
  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => (
        renderMeal(item)
      )}
    />
  );
}

export default MealsPage;
