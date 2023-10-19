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
    // console.log(params.id)
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch(`game-details/${params.id}`)
    // console.log(data.platforms)
    

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {}
  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.blackOnyx}}>
        <Stack.Screen
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
                // headerRight: () => (
                //     <ScreenHeaderBtn 
                //         iconUrl={icons.share}
                //         dimension="60%"
                //         handlePress={() => router.back()}
                //     />
                // ),
                headerTitle: ""
            }}
        />
        <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary}/>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : data.length === 0 ? (
                <Text>No data</Text>
            ) : (
                <View style={{ padding: SIZES.medium, paddingBottom: 100}}>
                    <GameHeader 
                        id={params.id}
                        name={data.name}
                        image={data.background_image}
                        developers={data.developers}
                        description={data.description_raw}
                        genres={data.genres.map(genre => genre.name).join(" ")}
                        tags={data.tags}
                        released={data.released_at}
                        platform={data.platforms}
                        addImage={data.background_image_additional}
                    />
                </View>
            )}
          
        </ScrollView>
       
        </>

        
    </SafeAreaView>
  )
}

export default GameDetails