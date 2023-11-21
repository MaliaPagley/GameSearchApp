import { View, Text, SafeAreaView, StyleSheet, Button, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/auth'
import { COLORS, FONT } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const styles = StyleSheet.create({
  container: {
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
  },
  favorites: {
    marginTop: 20,
    width: '80%',
  },
})

const Profile = () => {
  const { signOut, user } = useAuth();
  const [ favorites, setFavorites ] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const userFavorites = doc.data().favorites || [];
          setFavorites(userFavorites);
        });
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
      }
    };

    fetchFavorites();
  }, [user.uid, db]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name={'person-circle-outline'} size={100} color="white" />
        <Text style={styles.email}>{user.email}</Text>

        <Button
          title="Sign Out"
          onPress={() => signOut()}
        />

        <FlatList
          style={styles.favorites}
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Profile;
