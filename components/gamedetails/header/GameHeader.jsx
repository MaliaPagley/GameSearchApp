import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'
import { useAuth } from '../../../context/auth';
import { getFirestore, doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import { COLORS } from '../../../constants';

const NoImage = require("../../../assets/noimage.png");

const GameHeader = ({ image, name, developers, released }) => {
  const { user } = useAuth();
  const allDevelopers = developers.map(developer => developer.name).join(' / ');

  const addToFavorites = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, 'users', user.uid);
  
    try {
      // Check if the user's document already exists
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        // If the document exists, update it to add the game to favorites
        await updateDoc(userDocRef, {
          favorites: arrayUnion(name),
        });
        console.log('Game added to favorites successfully!');
      } else {
        // If the document doesn't exist, create it and add the game to favorites
        await setDoc(userDocRef, {
          uid: user.uid,
          favorites: [name],
        });
        console.log('User document created, and game added to favorites successfully!');
      }
    } catch (error) {
      console.error('Error adding game to favorites:', error.message);
    }
  };
  

  return (
    // Main Image / Game Title / Developers
    <View style={styles.container}>
      <View>
        {checkImageURL(image) ? (
          <Image
            source={{
              uri: image,
            }}
            style={styles.backgroundImage}
          />
        ) : (
          // No Image
          <Image
            source={NoImage}
            resizeMode='contain'
            style={styles.backgroundImage}
          />
        )}
      </View>
      <View style={styles.gameTitleBox}>
        <Text style={styles.gameTitle}>{name}</Text>
        <Text style={styles.gameDevelopers}>{allDevelopers}</Text>
        <Text style={styles.date}>Release Date: {released}</Text>
        <Button onPress={addToFavorites} title="Add to Favorites" color={COLORS.white}/>
      </View>
    </View>
  );
};

export default GameHeader;
