import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 50,
    padding: 10,
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    borderBottomColor: COLORS.white,
    color: COLORS.white,
    borderBottomWidth: 1,
    width: 300,
    paddingVertical: 10,
    fontSize: 25,
    marginVertical: 10,
  },
  actionContainer: {
    marginTop: 50,
    gap: 15,
  },
  signinLinkBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  signinLinkText: {
    color: COLORS.link,
    fontSize: 15,
  },
  signupBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: COLORS.white,
    marginLeft: 20,
    marginRight: 20,
  },
  signupText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: COLORS.blackNavy,
  },
  headerContainer: {
    marginBottom: 50,
    alignItems: "center",
  },
  headerTextOne: {
    fontSize: 40,
    color: COLORS.white,
    fontFamily: FONT.extraBold,
  },
  headerTextTwo: {
    color: COLORS.white,
    fontSize: 15,
  },
});
export default styles;
