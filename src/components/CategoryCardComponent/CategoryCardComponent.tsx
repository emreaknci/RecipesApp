
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CategoryCardComponent.style";
import Category from '../../types/Category';

interface CategoryProps {
  category: Category;
  navigation: any;
}
const CategoryComponent = ({ category, navigation }: CategoryProps) => {
  const handleCategoryPress = () => {
    navigation.navigate('Meals', { categoryName: category.strCategory });
  };

  return (
    <TouchableOpacity onPress={handleCategoryPress}>
      <View style={styles.container}>
        <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryComponent;
