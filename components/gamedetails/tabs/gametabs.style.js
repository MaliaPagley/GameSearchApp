import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";


const styles = StyleSheet.create({
  tabButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: COLORS.blackDecent,
  },
  activeTab: {
    color: COLORS.white, 
    fontWeight: 'bold',
    fontSize: 15,
  },
  inactiveTab: {
    color: COLORS.blackNavy, 
    fontWeight: 'normal', 
    fontSize: 15,
  },
});

export default styles;
