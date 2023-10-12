import { useState }from 'react'
import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../../constants';
import styles from './populargames.style';
import PopularGameCard from '../../common/cards/popular/PopularGameCard';
import useFetch from '../../../hook/useFetch';


const Populargames = () => {
  const { data, isLoading, error } = useFetch(
    'popular', {page: '1', page_size: '10'}) 

    //Destructuring data 
  const resultsData = data.results
  





  const [selectedGame, setSelectedGame] = useState();
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
            data={resultsData}
            renderItem={({ item }) => (
              <PopularGameCard
                item={item}
                
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal
          />
       
      )}
    
      </View>
    </View>
  )
}
//EXAMPLE DOC FOR TOP 100 - https://www.igdb.com/top-100/games
export default Populargames