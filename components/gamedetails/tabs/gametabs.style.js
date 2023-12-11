import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  backgroundImage: {
    width: 400,
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
 slide: {
    padding: SIZES.xSmall,
    borderRadius: 30, 
 },
 loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
loadingIndicator: {
  // Add any additional styles for the loading indicator if needed
},

});

export default styles;
