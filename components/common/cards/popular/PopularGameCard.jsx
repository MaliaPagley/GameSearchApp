import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './populargamecard.style'

const PopularGameCard = ({ item, selectedGame, handleCardPress }) => {
  // console.log(item.results)
  return (
    <TouchableOpacity
      style={styles.container(selectedGame, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedGame, item)}>
        <Image 
        source={{uri: item.background_image }}
        />

      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default PopularGameCard