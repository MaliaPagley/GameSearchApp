import React from 'react';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import styles from './newgamecard.style';
import { checkImageURL } from '../../../../utils';
import GamePlatforms from '../../../gamedetails/specifics/GamePlatforms';
import GameGenres from '../../../gamedetails/specifics/GameGenres';

const NewGameCard = ({ game, handleCardPress }) => {

 
  return (
    <TouchableOpacity style={styles.container} 
      testID='touchable-id'
      onPress={() => handleCardPress(game)}>
        <Pressable 
          style={styles.imageContainer} 
          onPress={() => handleCardPress(game)}
          testID="pressable-id"
        >
          {checkImageURL(game.background_image) ? (
            <Image
              source={{
                uri: game.background_image,
              }}
              resizeMode="cover"
              style={styles.mainImage}
              testID='main-image'
            />
          ) : (
            <Image
              source={require('../../../../assets/noimage.png')}
              resizeMode="contain"
              style={styles.mainImage}
              testID='default-image'
            />
          )}
        </Pressable>

      <View style={styles.genreContainer}>
        <GameGenres genres={game.genres} />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.gameName} numberOfLines={2}>
          {game.name}
        </Text>
        <View style={styles.platformContainer}>
          <GamePlatforms  platforms={game.platforms} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewGameCard;
