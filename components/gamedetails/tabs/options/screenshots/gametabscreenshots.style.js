import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from '../../../../../constants';
import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  addBackgroundImage: {
    width: screenWidth * 0.89, 
    height: screenHeight * 0.25, 
    resizeMode: 'cover',
    borderRadius: SIZES.xSmall
  },
  activeBackgroundImage: {
    width: screenWidth * 0.89,
    height: screenHeight * 0.25,
    resizeMode: 'cover',
    borderRadius: SIZES.xSmall,
  },
  slide: {
    width: screenWidth * 0.9,
    borderRadius: SIZES.xSmall
  },
  loadingContainer: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicatorText: {
    color: 'gray',
    margin: 5,
    fontSize: 20,
  },
  activeIndicatorText: {
    color: 'white',
  },
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
