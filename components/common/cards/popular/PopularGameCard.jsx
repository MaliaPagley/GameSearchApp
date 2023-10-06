import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./populargamecard.style";
// import { checkImageURL } from "../../../../utils";

const PopularGameCard = ({ item, selectedJob, handleCardPress }) => {
  // console.log(item.results)

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity >
        <Image
          source={{
            uri: item?.background_image
             
          }}
          resizeMode='center'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.gameName} numberOfLines={1}>
        {item.name}
      </Text>

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