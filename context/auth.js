import { useSegments, useRootNavigationState, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext) || {};
}

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;
    const isAuthGroup = segments[0] === "(auth)";

    if (!user && !isAuthGroup) {
      router.replace("/sign-in");
    } else if (user && isAuthGroup) {
      router.replace("/");
    }
  }, [user, segments, navigationState?.key]);
}

export function Provider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useProtectedRoute(user);

  const signOut = () => {
    setUser(null);
    router.replace("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ setUser, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
