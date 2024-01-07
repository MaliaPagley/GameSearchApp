import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert } from "react-native";

import { useAuthContext } from "../context/auth";
import { auth } from "../firebase";

const useSignIn = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        setUser(response.user);
      } else {
        setError(
          "Sign-in Authentication failed. Please check your credentials and try again.",
        );
      }
    } catch (error) {
      console.error("Sign-in error:", error.message);

      switch (error.code) {
        case "auth/invalid-login-credentials":
          setError(
            "Invalid login credentials. Please check your email and password.",
          );
          break;
        default:
          setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (error) {
    Alert.alert("Error", error);
    clearError();
  }

  return { signIn, error, loading };
};

export default useSignIn;
