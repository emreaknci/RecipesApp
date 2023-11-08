import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from "react-native";
import styles from "./CategoriesPage.style";
import Category from './../../types/Category';
import CategoryCardComponent from '../../components/CategoryCardComponent/CategoryCardComponent';
import MealService from "../../services/meal.service";

const CategoriesPage = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);



  const getCategories = async () => {
    MealService.listAllMealCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Hata oluştu:', error);
      });
  };


  const categoryComponent = (item) => {
    return <CategoryCardComponent
      category={item}
      navigation={navigation} />;
  };
  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.strCategory}
        renderItem={({ item }) => categoryComponent(item)}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default CategoriesPage;
