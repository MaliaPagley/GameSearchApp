import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './newgames.style';
import NewGameCard from '../../common/cards/new/NewGameCard';
import useInfiniteList from '../../../hook/useInfiniteList';
import { FlashList } from '@shopify/flash-list';

const Newgames = () => {
  const { games, loadingList, listError, loadMoreGames } = useInfiniteList('new');
  const router = useRouter();
  const handleCardPress = (item) => {
    router.push(`/game-details/${item.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Games</Text>
      </View>
      <View>
        {loadingList ? (
          <ActivityIndicator style={styles.loading} testID='loading-indicator' size='large'  />
        ) : listError ? (
          <Text style={styles.error}>Data Unavailable</Text>
        ) : (
          <View style={{flex: 2, minHeight: 200}}> 
            <FlashList
              testID='list-id'
                data={games}
                renderItem={({ item }) => (
                  <NewGameCard 
                    game={item}
                    handleCardPress={() => handleCardPress(item)} />
                )}
                estimatedItemSize={400}
                keyExtractor={(item, index) => `new-game-${item.id}-${index}`}
              />
              <TouchableOpacity style={styles.button} onPress={loadMoreGames}>
                <Text style={styles.buttonText}>Load More Games</Text>
              </TouchableOpacity>
          </View>
          )}
      </View>
    </View>
  );
};

export default Newgames;
