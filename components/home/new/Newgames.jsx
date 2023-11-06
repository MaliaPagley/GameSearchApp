import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
import styles from './newgames.style';
import NewGameCard from '../../common/cards/new/NewGameCard';
import useInfiniteList from '../../../hook/useInfiniteList';
import { FlashList } from "@shopify/flash-list";

const Newgames = () => {
  const router = useRouter();
  const { games, loadingList, listError, loadMoreGames } = useInfiniteList('new');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Games</Text>
      </View>

      <View style={{ minHeight: 100 }}>
        {loadingList ? (
          <ActivityIndicator size="large" colors={COLORS.white} />
        ) : listError ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
          <FlashList
            data={games}
            renderItem={({ item }) => (
              <NewGameCard
                game={item}
                handleNavigate={() => router.push(`/game-details/${item.id}`)}
              />
            )}
            estimatedItemSize={300}
            keyExtractor={(item, index) => `new-game-${item.id}-${index}`}
          />
          
          <Pressable style={styles.loadMoreBtn} onPress={loadMoreGames}>
              <Text style={styles.btnText}>{'Load More Games'}</Text>
          </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Newgames;