import { Stack, Link } from 'expo-router' 

import { useFonts } from 'expo-font'

import { Provider } from '../context/auth'
import { COLORS } from '../constants'
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
  const [fontsLoaded] = useFonts({
    "dm-bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "dm-medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "dm-regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
        <Stack>
            <Stack.Screen 
            name="index"
            options={{
                headerStyle: { backgroundColor: COLORS.blackOnyx },
                    headerShadowVisible: false,
                    contentStyle: {backgroundColor: COLORS.blackOnyx},
                    // headerLeft: () => (
                    //   <Link href="/modal"><Ionicons name={'game-controller-sharp'} size={20} color="white" /></Link>
                    // ),
                    headerRight: () => (
                    <Link href="profile"><Ionicons name={'person-sharp'} size={20} color="white" /></Link>
                    ),
                    title: "GameSearch",
            }}/>
            
            <Stack.Screen 
            name="profile"
            options={{
                headerStyle: { backgroundColor: COLORS.blackOnyx },
                headerShadowVisible: false,
                contentStyle: {backgroundColor: COLORS.blackOnyx},
                headerLeft: () => (
                    <Link href="/"><Ionicons name={'chevron-back-circle-sharp'} size={40} color={COLORS.white}/></Link>
                ),
                title: ''
            }}
            />
        </Stack>
    </Provider>
  )
};

export default Layout;