import React, {useState} from 'react';
import { Alert } from 'react-native';
import { doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';
import { useAuthContext } from '../context/auth';

const useAddToFavorites = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addToFavorites = async (id, name) => {
    const userDocRef = doc(db, 'users', user.uid);

    try {
      setLoading(true);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const updatedFavorites = [...userData.favorites, { id, name }];
        await updateDoc(userDocRef, {
          favorites: updatedFavorites,
        });
        setLoading(false);
      } else {
          await setDoc(userDocRef, {
            uid: user.uid,
            favorites: [{ id, name }],
          });
          setLoading(false);
      }
    } catch (error) {
        console.error('Error adding game to favorites:', error.message);
        setError('An unexpected error occurred. Please try again later.');
    } finally {
        setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (error) {
    Alert.alert('Error adding favorite: ', error);
    clearError();
  }

  return { addToFavorites, loading };
};

export default useAddToFavorites;
