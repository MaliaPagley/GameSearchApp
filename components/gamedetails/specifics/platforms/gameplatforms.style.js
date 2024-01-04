import { StyleSheet } from 'react-native';
import { SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  platformContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    padding: SIZES.large,
    alignItems: 'baseline',
    gap: 5,
  },
});

export default styles;

