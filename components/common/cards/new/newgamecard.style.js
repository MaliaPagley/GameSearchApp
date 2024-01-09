import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: SIZES.large,
    borderRadius: SIZES.xLarge,
    backgroundColor: COLORS.blackJungleGreen,
    shadowColor: COLORS.redLight,
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageContainer: {
    width: 360,
    height: 200,
    backgroundColor: COLORS.redMerlot,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: SIZES.small,
  },
  mainImage: {
    width: 350,
    height: 200,
    borderRadius: SIZES.medium,
  },
  nameContainer: {
    flex: 1,
    marginTop: SIZES.small,
    marginHorizontal: SIZES.medium,
  },
  gameName: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
    textAlign: "center",
  },
  platformsContainer: {
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
  },
  genreContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: SIZES.xsmall,
    flexWrap: "wrap",
    borderRadius: SIZES.large,
  },
});

export default styles;
