import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
  },
  gameInfo: {
    color: COLORS.white
  },
  gameInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.small / 2,
    marginLeft: SIZES.small / 1
  },
  pageHeaders: {
      fontSize: SIZES.xLarge,
      fontFamily: FONT.bold,
      color: COLORS.white,
      marginLeft: SIZES.small / 1,
      marginTop: SIZES.medium
    },
});

export default styles;
