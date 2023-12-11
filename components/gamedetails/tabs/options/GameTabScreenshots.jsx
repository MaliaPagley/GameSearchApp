import React from 'react';
import { View, Image, ActivityIndicator, Text, FlatList } from 'react-native';
import { checkImageURL } from '../../../../utils';
import styles from '../gametabs.style';
const NoImage = require('../../../../assets/noimage.png');
import useFetch from '../../../../hook/useFetch';


const GameTabScreenshots = ({ id }) => {
  const { data, isLoading } = useFetch(`screenshots/${id}`);

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
          <Image
            source={NoImage}
            resizeMode="contain"
            style={styles.backgroundImage}
          />
        )}
      </View>
    );
  };

  if (isLoading) {
    // Render the ActivityIndicator centered in the middle of the screen
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  // Render the component only when data is available
  return (
    <View style={{ flex: 1 }}>
      {data ? (
        <FlatList
          data={data.results}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={renderScreenshot}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

export default GameTabScreenshots;
