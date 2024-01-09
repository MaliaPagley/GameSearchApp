import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
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
  button: {
    backgroundColor: COLORS.grayNavy,
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: COLORS.grayThunder,
    fontSize: 15,
    padding: 10,
    alignSelf: "center",
  },
  loading: {
    color: COLORS.white,
  },
});

export default styles;
