import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  link: {
    color: "#0066b2",
    textAlign: "center",
  },
  dev: {
    color: COLORS.white,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: COLORS.blackJungleGreen,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default styles;
