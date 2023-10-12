import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    height: 200,
    // padding: SIZES.small,
    paddingBottom: SIZES.xxLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.gray3 : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    // shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: SIZES.small
  },
  gameName: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: "white",
    marginTop: "50px",
    marginBottom: SIZES.large,
    paddingLeft: SIZES.small,
    paddingRight: SIZES.small,
    textAlign: "center",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;