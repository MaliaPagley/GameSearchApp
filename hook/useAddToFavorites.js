import { doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';
import { useAuthContext } from '../context/auth';

const useAddToFavorites = () => {
  const { user } = useAuthContext();

  const addToFavorites = async (id, name) => {
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

  return { addToFavorites };
};

export default useAddToFavorites;
