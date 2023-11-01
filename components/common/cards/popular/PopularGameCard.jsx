import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./populargamecard.style";
import { checkImageURL } from "../../../../utils";

const NoImage = require("../../../../assets/noimage.png")

const PopularGameCard = ({ game, handleCardPress }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(game)}
    >
      <TouchableOpacity
        onPress={() => handleCardPress(game)}
      >
      {checkImageURL(game.background_image) 
      ?
        <Image
          source={{
            uri: game.background_image,
          }}
          resizeMode='center'
          style={styles.backgroundImage}
        /> 
      :
        <Image
          source={NoImage}
          resizeMode='contain'
          style={styles.backgroundImage}
        /> 
      }
      </TouchableOpacity>
      <View style={styles.gameNameContainer}>
       <Text style={styles.gameName} numberOfLines={2}>
          {game.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularGameCard;