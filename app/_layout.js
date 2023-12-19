import React from 'react';
import { Stack, Link, useRouter } from 'expo-router';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { ScreenHeaderBtn } from '../components';
import { Provider } from '../context/auth';
import { COLORS, icons } from '../constants';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'dm-bold': require('../assets/fonts/DMSans-Bold.ttf'),
    'dm-medium': require('../assets/fonts/DMSans-Medium.ttf'),
    'dm-regular': require('../assets/fonts/DMSans-Regular.ttf'),
    'dm-extraBold': require('../assets/fonts/DMSans-ExtraBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
      <Stack>
        <Stack.Screen 
          name='index'
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.blackOnyx },
            headerRight: () => (
              <Link href='profile'>
                <Ionicons name={'person-sharp'} size={20} color='white' />
              </Link>
            ),
            title: "GameSearch",
          }}
        />
        
        <Stack.Screen 
          name='profile'
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.blackOnyx },
            headerLeft: () => (
              <ScreenHeaderBtn 
                iconUrl={icons.left}
                dimension='60%'
                handlePress={() => router.back()}
              />
            ),
            title: 'Profile'
          }}
        />
      </Stack>
      <StatusBar barStyle={'light-content'} />
    </Provider>
  );
};

export default Layout;
