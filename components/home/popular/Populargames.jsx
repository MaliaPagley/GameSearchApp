import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
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
            estimatedItemSize={250}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={loadMoreGames} 
            onEndReachedThreshold={0.5} 
          />
        )}
      </View>
    </View>
  );
};

export default Populargames;
