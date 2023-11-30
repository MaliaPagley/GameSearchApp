import { useState } from 'react'
import { View, Text, Image, Pressable} from 'react-native'
import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'
import { useAuth } from '../../../context/auth';
import { getFirestore, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';

const NoImage = require("../../../assets/noimage.png");

const GameHeader = ({ image, name, developers, released, id }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { user } = useAuth();
  const allDevelopers = developers.map(developer => developer.name).join(' / ');


  const addToFavorites = async (id, name) => {
    const db = getFirestore();
    const userDocRef = doc(db, 'users', user.uid);
  
    try {
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const updatedFavorites = [...userData.favorites, { id, name }];
        await updateDoc(userDocRef, {
          favorites: updatedFavorites,
        });
      } else {
        await setDoc(userDocRef, {
          uid: user.uid,
          favorites: [{ id, name }],
        });
      }
    } catch (error) {
      console.error('Error adding game to favorites:', error.message);
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  

  return (
    // Main Image / Game Title / Developers
    <View style={styles.container}>
    <View>
      {checkImageURL(image) ? (
        <Image source={{ uri: image }} style={styles.backgroundImage} />
      ) : (
        // No Image
        <Image source={NoImage} resizeMode="contain" style={styles.backgroundImage} />
      )}
    </View>
    <View style={styles.gameInfoContainer}>
      <View style={styles.gameTitleBox}>
        <Text style={styles.gameTitle}>{name}</Text>
        <Text style={styles.gameDevelopers}>{allDevelopers}</Text>
        <Text style={styles.date}>Release Date: {released}</Text>
      </View>
      <Pressable 
        onPress={() => addToFavorites(id, name)}
        style={({ pressed }) => [
          ,{
          opacity: pressed || isPressed ? 0.7 : 1,
          },]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        >
        <Ionicons name="add-circle-outline" size={30} color={'white'} />
      </Pressable>
    </View>
  </View>
  );
};

export default GameHeader;
