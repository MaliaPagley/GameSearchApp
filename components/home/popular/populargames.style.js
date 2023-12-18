import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
    
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.grayThunder,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
  error: {
    color: COLORS.grayThunder,
    fontSize: 15,
    padding: 10,
    alignSelf: 'center', 
  },
  loading: {
    color: COLORS.white
  },
  sliderContainer: {
    paddingBottom: 15,
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
    borderColor: activeGamePlatform === item.name ? COLORS.blackDecent : COLORS.grayThunder,
  }),
  tabText: (activeGamePlatform, item) => ({
    fontFamily: FONT.medium,
    color: activeGamePlatform === item.name ? COLORS.grayThunder : COLORS.lightWhite,
  }),
});

export default styles;
