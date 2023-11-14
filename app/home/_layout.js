import { Stack, Link } from 'expo-router'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';


export default function HomeLayout() {

  return (
    <Stack>
        <Stack.Screen 
          name="index"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
                headerShadowVisible: false,
                contentStyle: {backgroundColor: COLORS.blackOnyx},
                headerLeft: () => (
                  <Link href="/home/modal"><Ionicons name={'game-controller-sharp'} size={20} color="white" /></Link>
                ),
                headerRight: () => (
                  <Link href="/home/profile"><Ionicons name={'person-sharp'} size={20} color="white" /></Link>
                ),
                title: "GameSearch",
        }}/>
        <Stack.Screen 
          name="modal"
          options={{
            presentation: 'modal',
            title: "Favorites"
          }}
        />
        <Stack.Screen 
          name="profile"
          options={{
              headerStyle: { backgroundColor: COLORS.blackOnyx },
              headerShadowVisible: false,
              contentStyle: {backgroundColor: COLORS.blackOnyx},
              headerLeft: () => (
                  <Link href="/home"><Ionicons name={'chevron-back-circle-sharp'} size={40} color={COLORS.white}/></Link>
            ),
            title: ''
         }}
        />
    </Stack>
  )
}