import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    display: "flex",
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: SIZES.xsmall,
    alignItems: "baseline",
    gap: 5,
    padding: 5,

  },
  tagContainer: {
    paddingLeft: SIZES.medium,
    gap: SIZES.xSmall,
    marginBottom: SIZES.medium,
   
  },
  tagText: {
    color: COLORS.white,
    marginLeft: SIZES.small,
    fontSize: SIZES.medium,
    paddingBottom: 5,
    
  },
  tag: {
    alignItems: "baseline",
    flexDirection: "row",
    
  }

});

export default styles;
