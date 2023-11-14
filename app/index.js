import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default function Index() {
  return (
    <View style={styles.container}>
        <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}