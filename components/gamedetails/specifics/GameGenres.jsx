import { View, Text } from 'react-native'
import React from 'react'
import styles from './gamespecifics.style';

const GameGenres = ({ genres }) => {
    const genreNames = genres ? genres.map(genre => genre.name) : [];

    const renderGenres = genreNames.map((genre, index) => (
        <View style={styles.genreWrapper} key={index}>
          <Text testID={`${genre}-genre`.toLowerCase()}
                style={styles.genre}>
            {genre}
          </Text>
        </View>
      ));

    return (
        <View style={styles.genreContainer}>
         {renderGenres}
        </View>
    )
};

export default GameGenres;