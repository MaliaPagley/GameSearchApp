import React from 'react';
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  GameHeader,
  GameAbout,
  GameFooter,
  GameTabOptions,
  ScreenHeaderBtn,
  GamePlatforms,
  GameTags,
  GameGenres,
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
};

const GameDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch(`game-details/${params.id}`);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackOnyx }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.blackOnyx },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />
          ),
          headerTitle: '',
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={COLORS.white} />
            </View>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                       <GameHeader 
                        id={params.id}
                        name={data.name}
                        image={data.background_image}
                        developers={data.developers}
                        releaseDate={data.released}
                    />
                    <GameTags tags={data.tags} />
                    <GamePlatforms platforms={data.platforms}/>
                    <GameTabOptions id={params.id} />
                    <GameGenres genres={data.genres} />
                    <GameAbout description={data.description_raw}/>
                    <GameFooter />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default GameDetails;
