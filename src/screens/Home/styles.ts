import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 3,
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        flex: 7,
        backgroundColor: "#262626",
        padding: 16,
    },
    image: {
        resizeMode: "contain"
    },
    scoreView: {
        padding: 4,
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    creatAndConcludedViews: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addToListView: {
        backgroundColor: "transparent",
        position: "absolute",
        flexDirection: "row",
        zIndex: 1,
        top: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#333333",
        borderRadius: 6,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginStart: 16,
    },
    buttonAdd: {
        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 16,
        marginLeft: 8,
    },
    textCreated: {
        fontSize: 14,
        color: "#4EA8DE"
    },
    textConcluded: {
        fontSize: 14,
        color: "#8284FA"
    },
    counterText: {
        backgroundColor: "#808080",
        fontSize: 12,
        alignItems: "center",
        justifyContent: "center",
        color: "#D9D9D9",
        marginStart: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 30,
    },
    form: {
        width: "100%",
        marginTop: 8,
        marginBottom: 16,
        borderTopWidth: 1,
        borderTopColor: "#454545"
    },
    listEmptyView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 56,
    },
    listEmptyTitle: {
        color: "#D9D9D9",
        fontSize: 12,
        textAlign: "center",
        fontFamily: "bold",
        marginTop: 10,
    },
    listEmptySubtitle: {
        color: "#808080",
        fontSize: 12,
        textAlign: "center",
    }
})