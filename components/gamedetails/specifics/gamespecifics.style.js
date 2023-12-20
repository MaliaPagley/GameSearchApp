import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    display: 'flex',
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    padding: SIZES.large,
    alignItems: 'baseline',
    gap: 5,
  },
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
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: SIZES.large,
    justifyContent: 'center',
  },
  genreWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
    margin: 5,
  },
  genre: {
    color: COLORS.white,
    fontSize: SIZES.small,
    textAlign: 'center',
    fontFamily: FONT.bold,
    backgroundColor: 'black',
    padding: 5,
  },
  favoritesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.blackOnyx,
    borderWidth: 2,
    borderColor: 'white',
    padding: 1,
    borderRadius: 50,
    width: 155,
  },
  favorites: {
    flexDirection: 'row',
  },
  favoritesText: {
    paddingTop: 7,
    color: COLORS.white,
  },
});

export default styles;

