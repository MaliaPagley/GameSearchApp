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
    paddingBottom: 10,
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
});

export default styles;
