import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
  favoritesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: COLORS.blackOnyx,
    borderWidth: 2,
    borderColor: "white",
    padding: 1,
    borderRadius: 50,
    width: 155,
  },
  favorites: {
    flexDirection: "row",
  },
  favoritesText: {
    paddingTop: 7,
    color: COLORS.white,
  },
  loading: {
    padding: 7,
  },
});

export default styles;
