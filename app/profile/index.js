import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";

import { COLORS } from "../../constants";
import useUserData from "../../hook/useUserData";
import styles from "../../styles/profile.style";

const Profile = () => {
  const router = useRouter();
  const {
    favorites,
    fullName,
    profileImage,
    loading,
    handleSignOut,
    user,
    error,
  } = useUserData();

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            testID="loadingID"
            size="large"
            color={COLORS.white}
          />
        </View>
      ) : error ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.error}>Something went wrong</Text>
        </View>
      ) : (
        <>
          <View style={styles.profileContainer}>
            <Image style={styles.profile} source={{ uri: profileImage }} />
            <Text style={styles.userName}>{fullName}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
          </View>

          <Text style={styles.favoritesHeader}>My Favorites:</Text>

          <View style={styles.container}>
            <FlatList
              data={favorites}
              testID="listID"
              keyExtractor={(item, index) => item.name + index.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => router.push(`/game-details/${item.id}`)}
                >
                  <View style={styles.favoritesContainer}>
                    <Text style={styles.favoritesText}>{item.name}</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={30}
                      color="white"
                    />
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
