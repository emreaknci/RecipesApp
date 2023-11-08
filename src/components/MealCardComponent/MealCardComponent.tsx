
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./MealCardComponent.style";
import Meal from "../../types/Meal";

interface MealCardComponentProps {
  navigation: any;
  meal: Meal;
}
const MealCardComponent = ({ navigation, meal }: MealCardComponentProps) => {
  const onPress = () => {
    navigation.navigate('MealDetail', { mealName: meal.strMeal })
  }
  return (
    <TouchableOpacity onPress={() => {
      onPress();
    }}>
      <ImageBackground borderRadius={20}
        source={{ uri: meal.strMealThumb }
        } style={styles.container} >
        <Text style={styles.title}>{meal.strMeal}</Text>

      </ImageBackground >
    </TouchableOpacity>
  );
}

export default MealCardComponent;
