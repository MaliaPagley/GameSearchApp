import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './populargames.style';
import PopularGameCard from '../../common/cards/popular/PopularGameCard';
import useInfiniteList from '../../../hook/useInfiniteList';
import { FlashList } from "@shopify/flash-list";

const Populargames = () => {
  const { games, loadingList, listError, loadMoreGames } = useInfiniteList('popular'); 
  const router = useRouter();
  const handleCardPress = (item) => {
    router.push(`/game-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Games</Text>
      </View>
      <View>
        {loadingList ? (
          <ActivityIndicator testID='loadingID' size="large" style={styles.loading} />
        ) : listError ? (
          <Text style={styles.error}>Data Unavailable</Text>
        ) : (
          <View style={{ minHeight: 2 }}>
            <FlashList
              testID='listID'
              data={games}
              renderItem={({ item }) => (
                <PopularGameCard
                  game={item}
                  handleCardPress={() => handleCardPress(item)}
                />
              )}
              estimatedItemSize={250}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReached={loadMoreGames} 
              onEndReachedThreshold={0.5} 
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Populargames;
