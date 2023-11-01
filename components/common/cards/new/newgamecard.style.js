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
    marginTop: SIZES.medium,
    marginBottom: SIZES.medium,
    
  },
  logoContainer: {
    width: 360,
    height: 200,
    backgroundColor: COLORS.redMerlot,
    borderRadius: SIZES.medium,
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
  platforms: {
    flexDirection: "row",
    justifyContent: "center",
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
