import { createContext, useContext, useEffect, useState } from 'react';
import { useSegments, useRootNavigationState, useRouter } from "expo-router";


const router = useRouter();
const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

function useProtectedRoute(user) {
    const segments = useSegments();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if(!navigationState?.key) return;
        const isAuthGroup = segments[0] === "(auth)";

        if (!user && !isAuthGroup) {
            router.replace("/sign-in")
        } else if (user && isAuthGroup) {
            router.replace("/")
        }

    }, [user, segments, navigationState?.key])

}

export function Provider({ children }) {
    const [user, setUser ] = useState(null);
    useProtectedRoute(user);

    const signOut = () => {
        setUser(null);
        router.replace('/sign-in');
    };

    return (
        <AuthContext.Provider value={{ setUser, user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}