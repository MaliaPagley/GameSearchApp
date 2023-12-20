import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import useAddToFavorites from '../../../hook/useAddToFavorites';
import styles from './gamespecifics.style'

export default function GameFavoritesButton({ name, id }) {
    const { addToFavorites } = useAddToFavorites();
    const handleAddToFavorites = () => { addToFavorites(id, name) };
  return (
    <View style={styles.favoritesContainer}>
        <TouchableOpacity style={styles.favorites} testID='FavoriteButtonID' onPress={handleAddToFavorites} >
            <Ionicons name='add-outline' size={30} color='white'/><Text style={styles.favoritesText}>Add To Favorites</Text>
        </TouchableOpacity>
    </View>
  )
};