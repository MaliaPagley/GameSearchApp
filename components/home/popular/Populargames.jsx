import { useState }from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Touchable } from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../../constants';
import styles from './populargames.style';
import PopularGameCard from '../../common/cards/popular/PopularGameCard';


const Populargames = () => {
  const [isLoading, setIsLoading] = useState(false)
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Games</Text>
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
        <FlatList
          data={[1,2,3,4,5,6,7,8,9,10]}
          renderItem={({item}) => (
            <PopularGameCard
              item={item}
            />
          )}
          keyExtractor={item => item?.game_id}
          // ^ Unknown id selection for exact "game_id" until we get the data from IGDB API 
          contentContainerStyle={{ columnGap: SIZES.medium}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    
      </View>
    </View>
  )
}
//EXAMPLE DOC FOR TOP 100 - https://www.igdb.com/top-100/games
export default Populargames