
import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const ingredientWidth = screenWidth / 2;
export default StyleSheet.create({
    container: {

    },
    image: {
        width: "100%",
        height: 250,
    },
    mainTitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginHorizontal: 10,
    },
    subTitle: {
        fontSize: 16,
        color: "white",
        marginHorizontal: 10,
    },
    ingredientsTitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    ingredientsContainer: {
        flexDirection: "column",
        marginHorizontal: 10,
        paddingVertical: 10

    },
    ingredientsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",

    },
    ingredients: {
        fontSize: 16,
        color: "white",
        margin: 3,
        padding: 5,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 15,
        width: 100,
        textAlign: "center",
        textAlignVertical: "center",
    },
    instructionsContainer: {
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    instructionsTitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    instructionsText: {
        fontSize: 16,
        color: "white",
    },
    buttonContainer: {
        backgroundColor: "#ff8426",
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center",
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    buttonTitle: {
        color: "white",
        paddingLeft: 5,
        fontWeight: "bold",
        fontSize: 20,
    },
});
