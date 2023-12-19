import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
  },
  backgroundImage: {
    width: 390,
    height: 200,
    alignSelf: "center",
    borderTopLeftRadius: SIZES.xLarge,
    borderTopRightRadius: SIZES.xLarge,
  },
  gameTitleBox: {
    padding: SIZES.large,
  },
  gameTitle: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "left",
  },
  gameDevelopers: {
    fontSize: SIZES.large - 2,
    color: COLORS.primary,
    fontFamily: FONT.small,
    marginLeft: SIZES.xSmall,
  },
  date: {
    color: COLORS.grayThunder,
    fontFamily: FONT.bold,
    marginLeft: SIZES.xSmall,
  },
  gameInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
});

export default styles;
