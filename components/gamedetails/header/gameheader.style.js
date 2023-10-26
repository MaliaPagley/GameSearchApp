import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
  },
  backgroundImage: {
    width: 360,
    height: 200,
    borderTopLeftRadius: SIZES.xLarge,
    borderTopRightRadius: SIZES.xLarge,
  },
  gameTitleBox: {
    padding: SIZES.large,
  },
  gameTitle: {
    fontSize: SIZES.large,
    color: COLORS.white,
    fontFamily: FONT.bold,
    textAlign: "left",
  },
  gameDevelopers: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.small,
    marginLeft: SIZES.xSmall,
  },
  date: {
    color: COLORS.grayThunder,
    fontFamily: FONT.bold,
    marginLeft: SIZES.xSmall,
  }

});

export default styles;
