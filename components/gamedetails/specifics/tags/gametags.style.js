import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  tagContainer: {
    paddingLeft: SIZES.large,
    gap: 15,
    paddingBottom: SIZES.medium,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'left'
  },
  tag: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '33.33%',
    boxSizing: 'border-box',
    marginRight: SIZES.large,
  },
  tagText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    marginLeft: 8,
    fontSize: 15,
  },
 
});

export default styles;