//Dynamic route that will be different for every game 
import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { GameHeader, GameAbout, GameFooter, GameTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

// Using useGlobalSearchParams - 
//  instead of useSearchParams https://docs.expo.dev/router/reference/search-parameters/

const GameDetails = () => {
    const params = useLocalSearchParams(); // Get specific id
    console.log(params.id)
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch(`game-details/${params.id}`)
   

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {}
  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ), 
                headerRight: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ),
                headerTitle: ""
            }}
        />
        <>
            <GameHeader 
            id={params.id}
            name={data.name}
            />
        </>

        
    </SafeAreaView>
  )
}

export default GameDetails