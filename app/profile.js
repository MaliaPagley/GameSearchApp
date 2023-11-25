import { View, Text, ScrollView, SafeAreaView, StyleSheet, Button, FlatList, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/auth'
import { COLORS, FONT, SIZES } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { NewGameCard } from '../components';

const router = useRouter()
const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: SIZES.small,
  },
  profileContainer: {
    color: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blackJungleGreen,
    width: "100%",
    borderRadius: 20,
   
  },
  email: {
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  signOut: {
    color: COLORS.actionBlue
  },
  favoritesHeader: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: 20, 
    justifyContent: "center",
    padding: 10,
  },
  favoritesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 15,
    backgroundColor: COLORS.blackMirage,
    padding: 10,
    borderRadius: 15,
  },
  favoritesText: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONT.regular,
    marginLeft: 15,
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

  const handleSignOut = () => {
    // Call the signOut function
    signOut();
  };


  return (

  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Ionicons name={'person-circle-outline'} size={100} color="white" />
      <Text style={styles.email}>{user.email}</Text>
      <Button
        title="Sign Out"
        onPress={handleSignOut}
      />
    </View>
      <Text style={styles.favoritesHeader}>My Favorites:</Text>
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/game-details/${item.id}`)}>
            <View style={styles.favoritesContainer}>
            <Text style={styles.favoritesText}>{item.name}</Text>
              <Ionicons 
                name={'chevron-forward-outline'} 
                size={30} 
                color="white" 
              />
            
          </View>
          </Pressable>
        )}
      />
    </View>
  </View>

  )
}

export default Profile;
