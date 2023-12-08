import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'; // Import FlatList
import { checkImageURL } from '../../../utils';
import styles from './gametabs.style';

const NoImage = require('../../../assets/noimage.png');
import useFetch from '../../../hook/useFetch';

const GameTabOptions = ({ addImage, genres, id }) => {
  const { data, isLoading, error, refetch } = useFetch(`screenshots/${id}`);
  const resultsData = data.results;

  // Renders Screenshots for display
  const renderScreenshot = ({ item }) => {
    return (
      <View style={styles.slide}>
        {checkImageURL(item.image) ? (
          <Image
            source={{
              uri: item.image,
            }}
            resizeMode="cover"
            style={styles.addBackgroundImage}
          />
        ) : (
          // No Image for additional
          <Image
            source={NoImage}
            resizeMode="contain"
            style={styles.backgroundImage}
          />
        )}
      </View>
    );
  };

  return (
    // ADDITIONAL IMAGES (SCREENSHOTS) / GENRE'S
    <>
      {isLoading ? ( // Show Activity Indicator while loading
        <ActivityIndicator size="large" color="white" style={styles.loadingIndicator} />
      ) : (
        <View style={styles.imageBox}>
          <FlatList
            data={resultsData}
            keyExtractor={(item) => item.id.toString()} 
            horizontal
            renderItem={renderScreenshot}
          />
        </View>
      )}

      <View style={styles.genreContainer}>
        {genres.map((genre, index) => (
          <View style={styles.genreWrapper} key={index}>
            <Text style={styles.genre}>{genre}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default GameTabOptions;
