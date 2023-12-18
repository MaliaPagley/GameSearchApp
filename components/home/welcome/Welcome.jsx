import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { Ionicons } from '@expo/vector-icons';

const Welcome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handlePress = (searchTerm) => {
    router.push(`/search/${searchTerm}`);
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search for a game"
            clearTextOnFocus={true}
            placeholderTextColor='white'
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            if (searchTerm.trim().length > 0) {
              handlePress(searchTerm);
            }
          }}>
          <Ionicons name="search-sharp" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
