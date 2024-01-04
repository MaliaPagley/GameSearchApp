import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import useFetch from '../../../../../hook/useFetch';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from './gametabpreview.style';

function GameTabPreview({ name }) {
  const { data, isLoading, error } = useFetch(`youtube-search/${name}`);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator testID="loadingID" size="large" color="white" />
      </View>
    );
  };

  if(error || !data || !data.items || data.items.length === 0) {
    return (
      <View style={styles.errorContainer}>
       <Text style={styles.error}>Video is Unavailable</Text>
      </View>
    )
  };

  const videoId = data?.items?.[0]?.id?.videoId;

  return (
    <>
      <View testID='iframeID'>
        <YoutubeIframe 
          height={220}
          videoId={`${videoId}`}
        />
      </View>
    </>
  );
}

export default GameTabPreview;
