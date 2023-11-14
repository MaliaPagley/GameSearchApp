import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/auth'
import { COLORS, FONT } from '../../constants'
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  profileContainer: {
    color: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    color: COLORS.white,
    fontFamily: FONT.bold
  },
  signOut: {
    color: COLORS.actionBlue
  }
})

const Profile = () => {
  const { signOut, user } = useAuth();
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.profileContainer}>
      <Ionicons name={'person-circle-outline'} size={100} color="white" />
        <Text style={styles.email}>{user.email}</Text>
       
        <Button 
                title="Sign Out"
                onPress={() => signOut()}
            />
     </View>
    </SafeAreaView>
  )
}

export default Profile