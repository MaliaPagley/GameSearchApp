import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./gameheader.style";
import { checkImageURL } from "../../../utils";

const GameHeader = ({ image, name, developers, releaseDate }) => {
  const developersName = developers
    ? developers.map((developer) => developer.name).join(" / ")
    : "";

  return (
    <View style={styles.container}>
      <View>
        {checkImageURL(image) ? (
          <Image
            testID="ImageID"
            source={{ uri: image }}
            style={styles.backgroundImage}
          />
        ) : (
          <Image
            testID="NoImageID"
            source={require("../../../assets/noimage.png")}
            resizeMode="contain"
            style={styles.backgroundImage}
          />
        )}
      </View>
      <View style={styles.gameInfoContainer}>
        <View style={styles.gameTitleBox}>
          <Text testID="NameID" style={styles.gameTitle}>
            {name ? name : "Unavailable"}
          </Text>
          <Text testID="DeveloperID" style={styles.gameDevelopers}>
            {developersName ? developersName : "Unavailable"}
          </Text>
          <Text testID="DateID" style={styles.date}>
            Release Date: {releaseDate ? releaseDate : "Unavailable"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GameHeader;
