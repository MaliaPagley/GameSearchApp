import { useState } from 'react';
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth,app } from '../firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import useSignIn from './useSignin';


const useSignup = () => {
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { signIn } = useSignIn();

  const signUp = async (email, password, setUser) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        if (response.user) {
          signIn(email, password, setUser);
          await addDoc(collection(db, 'users'), {
              uid: user.uid,
              favorites: []
          });
        } else {
          setError("Sign-up Authentication failed. Please check your credentials and try again.")
        }

    } catch (error) {
        console.error('Sign-up error:', error.message);

        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('This email is already in use. Please use a different email address or sign in.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address. Please enter valid email.');
            break;
          default:
            setError('An unexepected error occurred. Please try again later.')
        }
    }
  };
  const clearError = () => {
    setError(null);
  };

  if (error) {
    Alert.alert('Error', error);
    clearError()
  }

  return { signUp };
};

export default useSignup;