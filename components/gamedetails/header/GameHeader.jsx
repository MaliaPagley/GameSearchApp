import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'

const GameHeader = ({ backgroundImage, id, name, released }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{id}</Text>
      
    </View>
  )
}

export default GameHeader