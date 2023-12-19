import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        padding: 10,
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: 20,
        color: COLORS.white,
    },
    noOfSearchedGame: {
        marginTop: 2,
        marginLeft: 4,
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.grayThunder,
    },
    loaderContainer: {
        marginTop: SIZES.small,
    },
});

export default styles;
