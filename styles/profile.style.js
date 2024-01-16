import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
  },
  profileContainer: {
    color: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    padding: 20,
  },
  email: {
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  userName: {
    color: COLORS.white,
    fontFamily: FONT.extraBold,
    fontSize: 15,
  },
  signOut: {
    color: COLORS.actionBlue,
  },
  favoritesHeader: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: 20,
    justifyContent: "center",
    padding: 10,
  },
  favoritesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: COLORS.blackMirage,
    padding: 10,
    borderRadius: 15,
  },
  favoritesText: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONT.regular,
    marginLeft: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: COLORS.white,
    alignSelf: "center",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
});
export default styles;
