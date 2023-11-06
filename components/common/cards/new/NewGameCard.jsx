import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./newgamecard.style";
import { checkImageURL } from "../../../../utils";
import GameSpecifics from "../../../gamedetails/specifics/GameSpecifics";

const NoImage = require("../../../../assets/noimage.png")

const NewGameCard = ({ game, handleNavigate }) => {
  const platformNames = game.platforms ? game.platforms.map(platform => platform.platform.name) : [];
  const genreNames = game.genres ? game.genres.map(genre => genre.name) : [];


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
  
        <View style={styles.genreContainer} >
        {genreNames.map((genre, index) => (
          <View key={index} style={styles.genreWrapper}>
            <Text style={styles.genre}>
              {genre}
            </Text>
          </View>
        ))}
      </View>

       <View style={styles.textContainer}>
        <Text style={styles.gameName} numberOfLines={2}>
          {game.name} 
        </Text>
      <View style={styles.platformContainer}>
        <GameSpecifics platforms={platformNames} />
        
      </View>
      </View> 
    </TouchableOpacity>
  );
};

export default NewGameCard;