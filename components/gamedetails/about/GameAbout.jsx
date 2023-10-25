import React from 'react'
import { View, Text } from 'react-native'

import styles from './gameabout.style'

const GameAbout = ({ description }) => {
  return (
    <View>
      <Text style={styles.pageHeaders}>About:</Text>
      <View style={styles.gameInfoBox} horizontal>
        <Text style={styles.gameInfo}>{description}</Text>
      </View>
    </View>
  )
}

export default GameAbout