import { Stack, Link, useRouter } from 'expo-router' 

import { useFonts } from 'expo-font'
import { ScreenHeaderBtn } from '../components'
import { Provider } from '../context/auth'
import { COLORS, icons } from '../constants'
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
  const router = useRouter()
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
                    // <Link href="/"><Ionicons name={'chevron-back-circle-sharp'} size={40} color={COLORS.white}/></Link>
                    <ScreenHeaderBtn 
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={() => router.back()}
                />
                ),
                title: 'Profile'
            }}
            />
        </Stack>
    </Provider>
  )
};

export default Layout;