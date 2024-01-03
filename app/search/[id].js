import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { NewGameCard } from '../../components';
import { COLORS, SIZES } from '../../constants';
import styles from '../../styles/search.style';
import useSearch from '../../hook/useSearch';

const GameSearch = () => {
  const params = useLocalSearchParams();
  const { searchLoader, searchResult, searchError } = useSearch(`${params.id}`);
  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/game-details/${item.id}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blackOnyx }}>
      {searchLoader ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator style={styles.loading} testID='loadingID' size='large' />
        </View>
      ) : searchError ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.error}>Something went wrong</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            testID='list-id'
            data={searchResult}
            renderItem={({ item }) => (
              <NewGameCard
                game={item}
                handleCardPress={() => handleCardPress(item)}
              />
            )}
            contentContainerStyle={{ padding: SIZES.small }}
            keyExtractor={(item, index) => `search-game-${item.id}-${index}`}
            ListHeaderComponent={() => (
              <View style={styles.container}>
                <Text style={styles.searchTitle}>{params.id}</Text>
                <Text style={styles.noOfSearchedGame}>Search Results:</Text>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default GameSearch;
