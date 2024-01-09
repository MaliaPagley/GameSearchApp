import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 200,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    marginRight: SIZES.large,
    marginTop: 10,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: SIZES.small,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  gameName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    textAlign: "center",
  },
  nameContainer: {
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 10,
  },

  infoContainer: {
    marginTop: SIZES.large,
  },

  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default styles;
