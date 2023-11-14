import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router'

import { COLORS, SIZES } from '../../constants'
import { Newgames, Populargames, Welcome } from '../../components'

const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState(" ")

    return (
        <SafeAreaView style={{ flex: 1, backgoundColor: COLORS.blackMirage}}> 
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
                    <StatusBar barStyle={'light-content'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;

