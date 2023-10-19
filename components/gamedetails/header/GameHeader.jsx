import React from 'react'
import { View, Text, Image} from 'react-native'
import Specifics from '../specifics/Specifics'
import { GameFooter } from '../..'

import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'
import Ionicons from '@expo/vector-icons/Ionicons'
const NoImage = require("../../../assets/noimage.png")

const GameHeader = ({ image, id, name, description, developers, addImage, genres, platform , released}) => {

  //Deconstrution of data for display
  const allDevelopers = developers.map(developers => developers.name).join(' / ');
  const allPlatforms = platform.map(item => item.platform.name)
  console.log(allPlatforms)



 
  return (
    //Main background Image
    <View style={styles.container}>
      <View style={styles.imageBox}>
      {checkImageURL(image) ?  
        <Image
          source={{
            uri: image,
          }}
          style={styles.backgroundImage}
      /> 
      :
      //No Image 
      <Image
          source={NoImage}
          resizeMode='contain'
          style={styles.backgroundImage}
      /> 
      }
      </View>
      {/* Main Titles */}
      <View style={styles.gameTitleBox}>
        <Text style={styles.gameTitle}>{name}</Text>
        <Text style={styles.gameDevelopers}>{allDevelopers}</Text>  
        
      </View>
      <View>
       
       <Specifics platforms={allPlatforms} />
      </View>
      
      {/* Additional background image  */}
      <View style={styles.imageBox}>
      {checkImageURL(addImage) ?  
        <Image
          source={{
            uri: addImage,
          }}
          resizeMode='cover'
          style={styles.addBackgroundImage}
      /> 
      :
      //No Image for additional
      <Image
          source={NoImage}
          resizeMode='contain'
          style={styles.backgroundImage}
      /> 
      }
      </View>
      {/* Genre  */}
      <View style={styles.gameGenresBox}>
      <Text style={styles.gameGenres}>{genres}</Text>
      </View>
      {/* About details: */}
      <><Text style={styles.pageHeaders}>About:</Text></>
      {/* Main Description */}
      <View style={styles.gameInfoBox} horizontal>
        <Text style={styles.gameInfo}>{description}</Text>
      </View>
      <GameFooter />
    </View>
  )
}

export default GameHeader