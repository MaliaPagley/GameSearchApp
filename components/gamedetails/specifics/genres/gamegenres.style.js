import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  genreContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: SIZES.large,
    justifyContent: "center",
  },
  genreWrapper: {
    borderRadius: 5,
    overflow: "hidden",
    margin: 5,
  },
  genre: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textAlign: "center",
    fontFamily: FONT.bold,
    backgroundColor: "black",
    padding: 5,
  },
});

export default styles;
