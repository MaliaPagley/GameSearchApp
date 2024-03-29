import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, Link, useRouter } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

import { ScreenHeaderBtn } from "../components";
import { COLORS, icons } from "../constants";
import { Provider } from "../context/auth";

const Layout = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "dm-bold": require("../assets/fonts/DMSans-Bold.ttf"),
    "dm-medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "dm-regular": require("../assets/fonts/DMSans-Regular.ttf"),
    "dm-extraBold": require("../assets/fonts/DMSans-ExtraBold.ttf"),
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
            contentStyle: { backgroundColor: COLORS.blackOnyx },
            headerRight: () => (
              <Link href="profile">
                <Ionicons name="person-sharp" size={20} color="white" />
              </Link>
            ),
            title: "GameSearch",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="profile/index"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.blackOnyx },
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}
              />
            ),
            title: "Profile",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="(auth)/sign-in"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.blackNavy },
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(auth)/sign-up"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            contentStyle: { backgroundColor: COLORS.blackNavy },
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="game-details/[id]"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}
              />
            ),
            headerTitle: "",
          }}
        />

        <Stack.Screen
          name="search/[id]"
          options={{
            headerStyle: { backgroundColor: COLORS.blackOnyx },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}
              />
            ),
            headerTitle: "",
          }}
        />
      </Stack>
      <StatusBar barStyle="light-content" />
    </Provider>
  );
};

export default Layout;
