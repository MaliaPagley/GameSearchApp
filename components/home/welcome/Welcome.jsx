import { useState } from 'react'

import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

// All availble platforms for Flatlist scroll 
const gamePlatforms = ['Xbox', 'PlayStation', 'Mac', 'PC (Microsoft Windows)', 'Nintendo Switch']

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [ activeGamePlatform, setGamePlatform ] = useState('PlayStation') 

  return (
    <View>
      <View style={styles.container}>
        {/* <Text style={styles.userName}>Hello Gamers!</Text>
        <Text style={styles.welcomeMessage}>Find games to play</Text> */}
      </View>
      

{/* MAIN SEARCH INPUT */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search for a game"
          />
        </View> 

{/* SEARCH ICON FOR INPUT */}
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

{/* FLATLIST THAT CONTAINS THE GAME PLATFORMS */}
      <View style={styles.tabsContainer}>
        <FlatList
            data={gamePlatforms}
            renderItem={({item}) => (
              <TouchableOpacity 
                style={styles.tab(activeGamePlatform, item)}
                onPress = {() => {
                  setGamePlatform(item);
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeGamePlatform, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome