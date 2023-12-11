import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    display: "flex",
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: SIZES.xsmall,
    alignItems: "baseline",
    gap: 5,
    padding: 5,
  },
  tagContainer: {
    paddingLeft: SIZES.large,
    gap: 15,
    paddingBottom: SIZES.medium,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left'
  },
  tagText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginLeft: 8,
    fontSize: 15,
  },
  tag: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '33.33%', 
    boxSizing: 'border-box',
    marginRight: SIZES.large, 
  },
  genreContainer: {
    flex: 1,
    flexDirection: "row",
   
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
});

export default styles;
