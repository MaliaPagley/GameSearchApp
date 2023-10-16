import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "black",
    
  },
  imageBox: {
    width: 360,
    height: 200,
    // borderRadius: SIZES.large,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black",
    borderRadius: SIZES.large,
  
    
    
  },
  backgroundImage: {
    width: 360,
    height: 200,
    objectFit: "fill",
    borderTopLeftRadius: SIZES.xLarge,
    borderTopRightRadius: SIZES.xLarge,
  },
  addBackgroundImage: {
    width: 360,
    height: 200,
    objectFit: "fill",
    borderRadius: SIZES.large,
  },
  gameTitleBox: {
    // marginTop: SIZES.small,
    // marginLeft: SIZES.medium,
    padding: SIZES.large,
    
  },
  gameTitle: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "left",
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
    marginLeft: SIZES.xxLarge / 2
  },
//  gameName: {
//     fontSize: SIZES.medium - 2,
//     color: COLORS.primary,
//     fontFamily: FONT.medium,
//   },
  gameDevelopers: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.small,
  },
  gameGenres: {
    color: COLORS.white,
    justifyContent: "center",
    fontSize: SIZES.small,
    textAlign: "center",
    borderRadius: SIZES.large,
  },
  gameGenresBox: {
    padding: SIZES.small
  },
  pageHeaders: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
    marginLeft: SIZES.medium
  },
  // locationBox: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // locationImage: {
  //   width: 14,
  //   height: 14,
  //   tintColor: COLORS.gray,
  // },
  // locationName: {
  //   fontSize: SIZES.medium - 2,
  //   color: COLORS.gray,
  //   fontFamily: FONT.regular,
  //   marginLeft: 2,
  // },
});

export default styles;
