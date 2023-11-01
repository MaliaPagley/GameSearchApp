import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './populargames.style';
import PopularGameCard from '../../common/cards/popular/PopularGameCard';
import useInfiniteList from '../../../hook/useInfiniteList';
import { FlashList } from "@shopify/flash-list";

const Populargames = () => {
  const router = useRouter();
  const { games, loadingList, listError, loadMoreGames } = useInfiniteList('popular');

  const handleCardPress = (item) => {
    router.push(`/game-details/${item.id}`);
  };

  const handleEndReached = () => {
    // Check if the user has reached the end of the list, and then call loadMoreGames.
    if (!loadingList && games.length > 0) {
      const lastGame = games[games.length - 1];
      if (lastGame.id) {
        loadMoreGames();
        console.log("Last Game in list - popular:", lastGame.id)
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Games</Text>
      </View>

      <View style={{ minHeight: 2 }}>
        {loadingList ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : listError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlashList
            data={games}
            renderItem={({ item }) => (
              <PopularGameCard
                game={item}
                handleCardPress={() => handleCardPress(item)}
              />
            )}
            estimatedItemSize={5}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={handleEndReached} // Call handleEndReached when the end is reached
            onEndReachedThreshold={0.5} // Adjust this threshold as needed
            ListFooterComponent={loadingList ? <ActivityIndicator size="large" color="white" /> : null}
          />
        )}
      </View>
    </View>
  );
};

export default Populargames;
