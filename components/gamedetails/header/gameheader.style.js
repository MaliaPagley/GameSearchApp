import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
  },
  imageBox: {
  
    
  },
  backgroundImage: {
    width: 360,
    height: 200,
    objectFit: "contain",
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
  },
  date: {
    color: COLORS.grayThunder,
    fontFamily: FONT.bold
  }

});

export default styles;
