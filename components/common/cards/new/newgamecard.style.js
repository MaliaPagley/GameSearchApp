import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

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
    gap: SIZES.small
  },
  logoContainer: {
    width: 360,
    height: 200,
    backgroundColor: COLORS.redMerlot,
    borderRadius: SIZES.medium,
    // objectFit: "contain",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: SIZES.small,
  },
  logoImage: {
    width: 350,
    height: 200,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  gameName: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.white,
    textAlign: "center",
  },

  platformsContainer: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    
  },
  platforms: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: SIZES.xsmall,
    alignItems: "baseline",
    gap: SIZES.xSmall,
    marginVertical: SIZES.small / 1.25,
  },
  genreContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: SIZES.xsmall,
    flexWrap: "wrap",
    borderRadius: SIZES.large,
  },
  genreWrapper: {
      borderRadius: 5, 
      overflow: 'hidden', 
      margin: 5, 
  },
  genre: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
    backgroundColor: "black",
    padding: 5,
  }
});

export default styles;
