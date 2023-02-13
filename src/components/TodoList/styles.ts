import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#333333",
        flexDirection: "row",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
   icons: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    text: {
        flex: 8,
        fontSize: 16,
        color: "#F2F2F2",
        marginEnd: 8,
        marginStart: 8,
        textAlign: "auto",
    },
    checkedText: {
        flex: 8,
        fontSize: 16,
        color: "#808080",
        marginEnd: 8,
        marginStart: 8,
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
    }
});