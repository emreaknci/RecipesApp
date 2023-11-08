import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import CategoriesPage from './../pages/CategoriesPage/CategoriesPage';
import MealsPage from '../pages/MealsPage';
import MealDetailPage from '../pages/MealDetailPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppRouter = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Categories" component={CategoriesPage} options={
                    {
                        headerStyle: styles.header,
                        headerTintColor: styles.headerText.color,
                        headerTitleStyle: styles.headerText,
                        headerTitleAlign: styles.headerTitle.textAlign,
                        cardStyle: styles.cardStyle,
                    }
                } />
                <Stack.Screen name="Meals" component={MealsPage}
                    options={({ route }) => ({
                        headerStyle: styles.header,
                        headerTintColor: styles.headerText.color,
                        headerTitleStyle: styles.headerText,
                        headerTitleAlign: styles.headerTitle.textAlign,
                        cardStyle: styles.cardStyle,
                        headerTitle: GetMealCategoryTitle(route) || 'Meals', // Dinamik başlık ayarı

                    })}
                />
                <Stack.Screen
                    name="MealDetail"
                    component={MealDetailPage}
                    options={({ route }) => ({
                        headerStyle: styles.header,
                        headerTintColor: styles.headerText.color,
                        headerTitleStyle: styles.headerText,
                        headerTitleAlign: styles.headerTitle.textAlign,
                        cardStyle: styles.cardStyle,
                        headerTitle: GetMealDetailTitle(route) || 'Meal Detail', // Dinamik başlık ayarı
                        
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const GetMealDetailTitle = (route) => {
    return route.params.mealName;
}

const GetMealCategoryTitle = (route) => {
    return route.params.categoryName;
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff8426',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    headerTitle: {
        textAlign: 'center',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#ffaa69',
    },

});

export default AppRouter;