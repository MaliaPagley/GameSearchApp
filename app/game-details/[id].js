//Dynamic route that will be different for every game 
import React from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useLocalSearchParams} from 'expo-router';
import { useState } from 'react';
import { GameHeader, GameAbout, GameFooter, GameTabs, ScreenHeaderBtn, GameSpecifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

// Using useLocalSearchParams - 
//  instead of useSearchParams https://docs.expo.dev/router/reference/search-parameters/

const GameDetails = () => {
    const params = useLocalSearchParams(); // Get specific id
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch(`game-details/${params.id}`)

    
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
                headerTitle: ""
            }}
        />
        <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.white}/>
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
                        released={data.released}
                    />
                    <GameSpecifics 
                        platforms={data.platforms.map(item => item.platform.name)} 
                        tags={data.tags.map(tag => tag.name)}
                    
                    />
                    <GameTabs 
                        genres={data.genres.map(item => item.name)}
                        id={params.id}
                    />
                    <GameAbout description={data.description_raw}/>
                   <GameFooter />
                </View>
            )}
          
        </ScrollView>
        </>  
    </SafeAreaView>
  )
}

export default GameDetails


