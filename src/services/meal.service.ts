import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const MealService = {
    searchMealByName: async (name: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search.php?s=${name}`);
            return response.data.meals || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    listMealsByFirstLetter: async (letter: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search.php?f=${letter}`);
            return response.data.meals || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    lookupMealById: async (id: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
            return response.data.meals ? response.data.meals[0] : null;
        } catch (error) {
            console.error('Hata oluştu:', error);
            return null;
        }
    },

    lookupRandomMeal: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/random.php`);
            return response.data.meals ? response.data.meals[0] : null;
        } catch (error) {
            console.error('Hata oluştu:', error);
            return null;
        }
    },

    listAllMealCategories: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/categories.php`);
            return response.data.categories || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    filterByMainIngredient: async (ingredient: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
            return response.data.meals || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    filterByCategory: async (category: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/filter.php?c=${category}`);
            return response.data.meals || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    filterByArea: async (area: string) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/filter.php?a=${area}`);
            return response.data.meals || [];
        } catch (error) {
            console.error('Hata oluştu:', error);
            return [];
        }
    },

    getMealThumbnailImageURL: (imagePath: string) => {
        return `https://www.themealdb.com/images/media/meals/${imagePath}/preview`;
    },

    getIngredientThumbnailImageURL: (ingredientName: string, small = false) => {
        const imageSize = small ? '-Small' : '';
        return `https://www.themealdb.com/images/ingredients/${ingredientName}${imageSize}.png`;
    },
};

export default MealService;
