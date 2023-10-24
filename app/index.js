import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'

import { COLORS, SIZES, icons } from '../constants'
import { Newgames, Populargames, ScreenHeaderBtn, Welcome } from '../components'

//MAIN HOME SCREEN
const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState(" ")
    return (
        <SafeAreaView style={{ flex: 1, backgoundColor: COLORS.blackMirage}}> 
            <Stack.Screen options={{ 
                headerStyle: { backgroundColor: COLORS.blackOnyx },
                headerShadowVisible: false,
                // headerLeft: () => (
                //     <ScreenHeaderBtn iconUrl={ icons.menu } dimension="60%" />
                // ),
                // headerRight: () => (
                //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                // ),
                headerTitle: "GameSearch"

            }} />

            <ScrollView style={{backgroundColor: COLORS.blackOnyx}}
            showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                    }}
                >
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    
                    />
                    <Populargames />
                    <Newgames />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home




/* SCRIPT DESC (MAIN HOME SCREEN)- LINKS/EXPLAINATIONS/REMINDERS
    - <Stack.Screen> - https://reactnavigation.org/docs/stack-navigator/ 1# Transition from screens 2# New screen pleaced on top of stack
            HEADER STYLING - "options" The following options can be used to configure the screens in the navigator. 
        These can be specified under screenOptions prop of Stack.navigator or options prop of Stack.Screen.
    -

*/