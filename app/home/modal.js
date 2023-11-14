
import { View, Text, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
})

export default function Modal() {
 
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
    </View>
  );
}