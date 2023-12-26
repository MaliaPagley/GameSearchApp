import { View, Text, Button, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore } from 'firebase/firestore';
import useUserData from '../hook/useUserData'; 
import styles from '../styles/profile.style';
import { COLORS } from '../constants';



const Profile = () => {
  const router = useRouter();
  const { favorites, fullName, loading, handleSignOut, user } = useUserData(getFirestore());

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.white} />
        </View>
      ) : (
        <>
          <View style={styles.profileContainer}>
            <Ionicons name={'person-circle-outline'} size={100} color="white" />
            <Text style={styles.userName}>{fullName}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
          </View>

          <Text style={styles.favoritesHeader}>My Favorites:</Text>

          <View style={styles.container}>
            <FlatList
              data={favorites}
              keyExtractor={(item, index) => item.name + index.toString()}
              renderItem={({ item }) => (
                <Pressable onPress={() => router.push(`/game-details/${item.id}`)}>
                  <View style={styles.favoritesContainer}>
                    <Text style={styles.favoritesText}>{item.name}</Text>
                    <Ionicons name={'chevron-forward-outline'} size={30} color="white" />
                  </View>
                </Pressable>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Profile;
