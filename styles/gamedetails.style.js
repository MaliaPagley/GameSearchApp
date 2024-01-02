import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    loadingContainer: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: COLORS.white,
        alignSelf: 'center',
     
    }
  });
  export default styles;