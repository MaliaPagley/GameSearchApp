import React from 'react'
import { View, Text, Linking } from 'react-native'

import styles from './gamefooter.style'

const GameFooter = () => {
  return (
    <View>
      <Text style={styles.link}
      onPress={() => Linking.openURL('https://rawg.io/')}>
  Source: Rawg.io
</Text>
    </View>
  )
}

export default GameFooter