import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  searchTitle: {
    fontFamily: FONT.bold,
    fontSize: 23,
    color: COLORS.white,
    marginLeft: 10,
  },
  noOfSearchedGame: {
    marginTop: 2,
    marginLeft: 20,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.grayThunder,
  },
  loadingContainer: {
    marginTop: SIZES.small,
  },
  header: {
    padding: 10,
  },
  error: {
    color: COLORS.white,
    alignSelf: "center",
  },
});

export default styles;
