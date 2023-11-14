import { createContext, useContext, useEffect, useState } from 'react';
import { useSegments, useRootNavigationState, useRouter } from "expo-router";

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

function useProtectedRoute(user) {
    const segments = useSegments();
    const router = useRouter();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if(!navigationState?.key) return;
        const isAuthGroup = segments[0] === "(auth)";

        if (!user && !isAuthGroup) {
            router.replace("/sign-in")
        } else if (user && isAuthGroup) {
            router.replace("/home")
        }

    }, [user, segments, navigationState?.key])

}

export function Provider({ children }) {
    const [user, setUser ] = useState(null);

    useProtectedRoute(user);

    const signIn = () => {};

    const signUp = () => {};

    const signOut = () => {};

    return (
        <AuthContext.Provider value={{ setUser, user, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}