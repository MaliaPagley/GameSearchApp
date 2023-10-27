import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./populargamecard.style";
import { checkImageURL } from "../../../../utils";

const NoImage = require("../../../../assets/noimage.png")

const PopularGameCard = ({ item, handleCardPress }) => {
  // console.log(item.name)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        onPress={() => handleCardPress(item)}
      >
      {checkImageURL(item.background_image) 
      ?
        <Image
          source={{
            uri: item.background_image,
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
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularGameCard;