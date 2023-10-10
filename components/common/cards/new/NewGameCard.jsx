import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./newgamecard.style";
import { checkImageURL } from "../../../../utils";

const NoImage = require("../../../../assets/noimage.png")

const NewGameCard = ({ game, handleNavigate }) => {
  // console.log(item.results)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        {checkImageURL(game.background_image) ?  
        <Image
          source={{
            uri: game.background_image,
          }}
          resizeMode='center'
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
      

       <View style={styles.textContainer}>
        <Text style={styles.gameName} numberOfLines={2}>
          {game.name} - {game.id}
        </Text>

      </View> 
    </TouchableOpacity>
  );
};

export default NewGameCard;