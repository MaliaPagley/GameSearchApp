import { useState } from 'react';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import useSignIn from './useSignin';
import { db } from '../firebase';

const useSignup = (auth) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useSignIn(auth);

  const signUp = async (email, password, fullName) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        await signIn(email, password);

        const userDocRef = doc(db, 'users', user.uid);

        await setDoc(userDocRef, {
          favorites: [],
          fullName: fullName,
          uid: user.uid
        });
      } else {
        setError("Sign-up Authentication failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error('Sign-up error:', error.message);

      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please use a different email address or sign in.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address. Please enter a valid email.');
          break;
        default:
          setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (error) {
    Alert.alert('Error', error);
    clearError();
  }

  return { signUp, loading, error };
};

export default useSignup;
