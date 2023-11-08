
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#ffd0ad",
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#ff8426",
    },
    image: {
        width: 75,
        height: 75,
        objectFit: "fill",
        borderRadius: 50,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        textAlign: "center",
        color: "#333333",
    },
});
