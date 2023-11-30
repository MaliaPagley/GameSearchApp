import { View, Text, Button, FlatList, Pressable, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/auth'
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../styles/profile.style'
import { COLORS } from '../constants';

const router = useRouter()

const Profile = () => {
  const { signOut, user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
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

        setLoading(false);
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user.uid, db]);

  const handleSignOut = () => {
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
      { loading ? (
      <ActivityIndicator size="large" color={COLORS.white} /> 
      ) : (
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
      )}
    </View>
  </View>

  );
};

export default Profile;
