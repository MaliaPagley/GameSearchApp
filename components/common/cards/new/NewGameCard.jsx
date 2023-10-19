import { View, Text, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import styles from "./newgamecard.style";
import { checkImageURL } from "../../../../utils";

const NoImage = require("../../../../assets/noimage.png")

const NewGameCard = ({ game, genre, handleNavigate }) => {
 
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity 
        style={styles.logoContainer}
        onPress={handleNavigate}
      >
        {checkImageURL(game.background_image) ?  
        <Image
          source={{
            uri: game.background_image,
          }}
          resizeMode='cover'
          style={styles.logoImage}
      /> 
      :
      <Image
          source={NoImage}
          resizeMode='contain'
          style={styles.logoImage}
      />
      }
    
        
      </TouchableOpacity>
        <View style={styles.genreContainer}>
          <Text style={styles.genre} numberOfLines={2}>{genre}</Text>
          {/* <FlatList
          data={genre}
          renderItem={({item}) => 
          <View >
          <Text numberOfLines={2}>
            {item}
          </Text>
        </View>
        }
        keyExtractor={item => item.id}
      /> */}
        </View>

       <View style={styles.textContainer}>
        <Text style={styles.gameName} numberOfLines={2}>
          {game.name}
        </Text>

      </View> 
    </TouchableOpacity>
  );
};

export default NewGameCard;