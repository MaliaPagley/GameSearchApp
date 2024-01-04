import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from '../../../../../constants';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
  },
  error: {
    color: COLORS.white
  },
  errorContainer: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blackJungleGreen,
    borderRadius: 20,
    color: COLORS.white,
  }

});

export default styles;
