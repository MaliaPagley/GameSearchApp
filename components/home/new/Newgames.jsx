import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './newgames.style';
import NewGameCard from '../../common/cards/new/NewGameCard';
import useInfiniteList from '../../../hook/useInfiniteList';
import { FlashList } from "@shopify/flash-list";

const Newgames = () => {
  const router = useRouter();
  const { games, loadingList, listError, loadMoreGames } = useInfiniteList('new');

  const handleEndReached = () => {
    // Check if the user has reached the end of the list, and then call loadMoreGames.
    if (!loadingList && games.length > 0) {
      const lastGame = games[games.length - 1];
      if (lastGame.id) {
        loadMoreGames();
        console.log("Last Game in list - new:", lastGame.id)
      }
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Games</Text>
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
              <NewGameCard
                game={item}
                handleNavigate={() => router.push(`/game-details/${item.id}`)}
              />
            )}
            estimatedItemSize={5}
            keyExtractor={(item, index) => `new-game-${item.id}-${index}`}
            onEndReached={handleEndReached} // Call handleEndReached when the end is reached
            onEndReachedThreshold={0.1} // Adjust this threshold as needed
            ListFooterComponent={loadingList ? <ActivityIndicator size="large" color="white" /> : null}
          />
        )}
      </View>
    </View>
  );
};

export default Newgames;


