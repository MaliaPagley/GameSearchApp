import React from 'react';
import { View, Text } from 'react-native';
import styles from './gamegenres.style'

const GameGenres = ({ genres }) => {
  const genreNames = genres ? genres.map(genre => genre.name) : [];

  const renderGenres = genreNames.map((genre, index) => (
    <View style={styles.genreWrapper} key={index}>
      <Text style={styles.genre}>
        {genre}
      </Text>
    </View>
  ));

  return (
    <View style={styles.genreContainer}>
      {renderGenres}
    </View>
  );
};

export default GameGenres;
