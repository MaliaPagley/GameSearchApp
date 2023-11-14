import { Stack, Slot } from 'expo-router' //For Routing expo DOC => https://docs.expo.dev/routing/layouts/
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Button } from 'react-native'
import { Provider } from '../context/auth'


//Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
// Custom fonts
    const [fontsLoaded] = useFonts({
        "dm-bold": require('../assets/fonts/DMSans-Bold.ttf'),
        "dm-medium": require('../assets/fonts/DMSans-Medium.ttf'),
        "dm-regular": require('../assets/fonts/DMSans-Regular.ttf'),
    })
    // //If fonts are loaded 
    // const onLayoutRootView = useCallback(async () => {
    //     if (!fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    // if(!fontsLoaded) return null;
    return (
        <Provider>
            <Slot />
        </Provider>
        // <Stack screenOptions={{headerShown: false }}/>
        
    )
  
}

export default Layout;