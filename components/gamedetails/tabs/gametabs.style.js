import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
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
  genreContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: SIZES.large,
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
    textAlign: "center",
    fontFamily: FONT.bold,
    backgroundColor: "black",
    padding: 5,
  },
 slide: {
    padding: SIZES.xSmall,
    borderRadius: 30, 
 },

});

export default styles;
