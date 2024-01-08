import { query, collection, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useAuthContext } from "../context/auth";
import { db } from "../firebase/index";

const useUserData = () => {
  const { user, signOut } = useAuthContext();
  const [favorites, setFavorites] = useState([]);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userFavorites = userData.favorites || [];
          const userFullName = userData.fullName || "";
          setFavorites(userFavorites);
          setFullName(userFullName);
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching favorites:", error.message);
        setError(true);
        setLoading(false);
      }
    };

    if (user.uid && db) {
      fetchUserData();
    }
  }, [user.uid, db]);

  const handleSignOut = () => {
    signOut();
  };

  return { favorites, fullName, loading, handleSignOut, user, error };
};

export default useUserData;
