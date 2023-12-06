import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './gamefooter.style';

const GameFooter = () => {
  return (
    <View testID="gameFooter" style={styles.container}>
      <Text testID="sourceLink" style={styles.link}
        onPress={() => Linking.openURL('https://rawg.io/')}>
          Source: Rawg.io
      </Text>
      <Text style={styles.dev}>App developed by Malia Pagley</Text>
    </View>
  )
}

export default GameFooter;