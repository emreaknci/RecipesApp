import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import Meal from './../../types/Meal';
import MealService from "../../services/meal.service";
import styles from "./MealDetailPage.style";
import Icon from 'react-native-vector-icons/FontAwesome';

interface MealDetailPageProps {
  route: any;
}

const MealDetailPage = ({ route }: MealDetailPageProps) => {
  const { mealName } = route.params;
  const [meal, setMeal] = useState<Meal | null>(null);
  const [combinedIngredients, setCombinedIngredients] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const openYoutubeVideo = (url) => {
    Linking.openURL(url)
      .catch((err) => {
        console.error("Link açma hatası: ", err);
      });
  };
  function combineMeasuresAndIngredients(meal) {
    const combinedIngredients = [];

    for (let i = 1; i <= 20; i++) {
      const measureKey = `strMeasure${i}`;
      const ingredientKey = `strIngredient${i}`;

      const measure = meal[measureKey];
      const ingredient = meal[ingredientKey];

      if (measure && measure.trim() !== "" && ingredient && ingredient.trim() !== "") {
        combinedIngredients.push(`${ingredient} - ${measure}`);
      }
    }
    return combinedIngredients;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await MealService.searchMealByName(mealName);
      if (response.length > 0) {
        const data = combineMeasuresAndIngredients(response[0]);
        setCombinedIngredients(data);
        setMeal(response[0]);
        setLoading(false);
      }
    }

    fetchData();
  }, [mealName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <Text style={styles.subTitle}>
              <Text style={styles.mainTitle}>Area: </Text>
              {meal.strArea}
            </Text>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <View style={styles.ingredientsRow}>
                {combinedIngredients.map((ingredient, index) => (
                  <Text key={index} style={styles.ingredients}>
                    {ingredient}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.instructionsContainer}>
              <Text style={styles.instructionsTitle}>Instructions:</Text>
              <Text style={styles.instructionsText}>{meal.strInstructions}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => openYoutubeVideo(meal.strYoutube)}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonTitle}>Watch On </Text>
                <Icon name="youtube" size={40} color="white" />
              </View>

            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

export default MealDetailPage;
