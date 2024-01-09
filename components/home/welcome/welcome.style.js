import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.blackOnyxLight,
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
    width: 40,
    height: "100%",
    backgroundColor: COLORS.blackOnyx,
    borderRadius: 30,
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
    borderColor:
      activeGamePlatform === item ? COLORS.blackDecent : COLORS.grayThunder,
  }),
  tabText: (activeGamePlatform, item) => ({
    fontFamily: FONT.medium,
    color: activeGamePlatform === item ? COLORS.grayThunder : COLORS.lightWhite,
  }),
});

export default styles;
