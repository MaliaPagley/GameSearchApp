import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import useAddToFavorites from '../../../../hook/useAddToFavorites';
import styles from './gamefavorites.style'

const GameFavoritesButton = ({ name, id })  => {
    const { addToFavorites, loading } = useAddToFavorites();
    const handleAddToFavorites = () => { addToFavorites(id, name) };

  return (
    <View style={styles.favoritesContainer}>
      {loading ? (
         <View style={styles.loading}>
            <ActivityIndicator testID='loadingID' color={'white'} />
          </View>
          ) : (
          <TouchableOpacity style={styles.favorites} testID='FavoriteButtonID' onPress={handleAddToFavorites} >
            <Ionicons name='add-outline' size={30} color='white'/><Text style={styles.favoritesText}>Add To Favorites</Text>
        </TouchableOpacity>
          )}
    </View>
  )
};
export default GameFavoritesButton;