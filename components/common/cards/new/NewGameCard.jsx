import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./newgamecard.style";
import { checkImageURL } from "../../../../utils";
import Specifics from "../../../gamedetails/specifics/Specifics";

const NoImage = require("../../../../assets/noimage.png")

const NewGameCard = ({ game, genre, handleNavigate, platforms}) => {

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
       
        </View>

       <View style={styles.textContainer}>
       
        <Text style={styles.gameName} numberOfLines={2}>
          {game.name}
        </Text>
      <View style={styles.platformContainer}>
        <Specifics platforms={platforms} />
      </View>
      </View> 
    </TouchableOpacity>
  );
};

export default NewGameCard;