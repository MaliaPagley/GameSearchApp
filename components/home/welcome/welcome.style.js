import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  // container: {
  //   width: "80%",
  // },
  // userName: {
  //   fontFamily: FONT.regular,
  //   fontSize: SIZES.large,
  //   color: COLORS.redDark,
  // },
  // welcomeMessage: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.xLarge,
  //   color: COLORS.redLight,
  //   marginTop: 2,
  // },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // marginTop: SIZES.small,
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.blackJungleGreen,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    color: COLORS.white,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.grayThunder,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeGamePlatform, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeGamePlatform === item ? COLORS.blackDecent : COLORS.grayThunder,
  }),
  tabText: (activeGamePlatform, item) => ({
    fontFamily: FONT.medium,
    color: activeGamePlatform === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
