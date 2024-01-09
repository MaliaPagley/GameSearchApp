import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            testID="inputID"
            placeholder="Search for a game"
            clearTextOnFocus
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          testID="searchID"
          onPress={() => {
            if (searchTerm.trim().length > 0) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        >
          <Ionicons name="search-sharp" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
