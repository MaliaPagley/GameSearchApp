import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useFetch from '../../../../hook/useFetch';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from '../gametabs.style'

 function GameTabPreview({ name }) {
  const { data, isLoading } = useFetch(`youtube-search/${name}`);
  if (!isLoading && data && data.items && data.items.length > 0) {
    const videoId = data.items[0]?.id?.videoId;

    if (videoId) {
      return (
        <View>
        <YoutubeIframe 
          height={220}
          videoId={`${videoId}`}
        />
        </View>
      );
    }
  }
  // Render something else or a loading indicator if data is not available
  return  <View testID="loading-indicator" style={styles.loadingContainer}>
  <ActivityIndicator size="large" color="white" />
</View>;
}
export default GameTabPreview;