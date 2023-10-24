import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./populargamecard.style";
import { checkImageURL } from "../../../../utils";

const NoImage = require("../../../../assets/noimage.png")

const PopularGameCard = ({ item, selectedGame, handleCardPress }) => {
  // console.log(item.results)

  return (
    <TouchableOpacity
      style={styles.container(selectedGame, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        onPress={() => handleCardPress(item)}
      >
      {checkImageURL(item.background_image) ?  
          <Image
            source={{
              uri: item.background_image,
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
      {/* <Text style={styles.gameName} numberOfLines={2}>
        {item.name}
      </Text> */}

       {/* <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text>Name</Text>
        </View>
      </View>  */}
    </TouchableOpacity>
  );
};

export default PopularGameCard;