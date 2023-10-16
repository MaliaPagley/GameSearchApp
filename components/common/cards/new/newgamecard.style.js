import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.blackJungleGreen,
    ...SHADOWS.medium,
    shadowColor: COLORS.black2,
    gap: SIZES.small
  },
  logoContainer: {
    width: 360,
    height: 200,
    backgroundColor: COLORS.redMerlot,
    borderRadius: SIZES.medium,
    objectFit: "fit",
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
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  genreContainer: {
    

  }, 
  genre: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    
  }
});

export default styles;
