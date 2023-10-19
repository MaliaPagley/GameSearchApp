import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: "left",
    paddingLeft: SIZES.small,
    alignItems: "baseline",
    gap: SIZES.xSmall,
    marginVertical: SIZES.small / 1.25,
  },

});

export default styles;
