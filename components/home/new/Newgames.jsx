import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../../constants';
import styles from './newgames.style';
import NewGameCard from '../../common/cards/new/NewGameCard';
import useFetch from '../../../hook/useFetch';

const Newgames = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('new', { page: '1', page_size: '5' });

  // Destructuring data
  const resultsData = data.results;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Games</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          resultsData?.map((game) => (
            <NewGameCard
              game={game}
              genre={game.genres.map((genre) => genre.name).join(' ')}
              platforms={game.platforms.map(platforms => platforms.platform.name)}

              key={`new-game-${game?.id}`}
              handleNavigate={() => router.push(`/game-details/${game.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Newgames;
