import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './populargamecard.style';
import { checkImageURL } from '../../../../utils';

const PopularGameCard = ({ game, handleCardPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => handleCardPress(game)}>
        {checkImageURL(game.background_image) ? (
          <Image
            source={{
              uri: game.background_image,
            }}
            resizeMode="center"
            style={styles.backgroundImage}
            testID='main-image'
          />
        ) : (
          <Image
            source={require('../../../../assets/noimage.png')}
            resizeMode="contain"
            style={styles.backgroundImage}
            testID='default-image'
          />
        )}
        <View style={styles.nameContainer}>
          <Text style={styles.gameName} numberOfLines={2}>
            {game.name}
          </Text>
        </View>
    </TouchableOpacity>
  );
};

export default PopularGameCard;
