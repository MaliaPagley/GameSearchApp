import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {
  GameHeader,
  GameAbout,
  GameFooter,
  GameTabOptions,
  GamePlatforms,
  GameTags,
  GameGenres,
  GameFavoritesButton
} from '../../components';
import { COLORS, SIZES } from '../../constants';
import styles from '../../styles/gamedetails.style'
import useFetch from '../../hook/useFetch';

const GameDetails = () => {
  const params = useLocalSearchParams();
  const { data, isLoading, error } = useFetch(`game-details/${params.id}`);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackOnyx }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator testID='loadingID' size="large" color={COLORS.white} />
            </View>
          ) : error ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.error}>Something went wrong</Text>
            </View>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <GameHeader 
                name={data.name}
                image={data.background_image}
                developers={data.developers}
                releaseDate={data.released}
              />
              <GameTags tags={data.tags} />
              <GameFavoritesButton name={data.name} id={params.id}/>
              <GamePlatforms platforms={data.platforms}/>
              <GameTabOptions id={params.id} name={data.name}/>
              <GameGenres genres={data.genres} />
              <GameAbout description={data.description_raw}/>
              <GameFooter />
            </View>
          )}
        </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetails;
