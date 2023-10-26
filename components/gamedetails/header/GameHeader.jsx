import React from 'react'
import { View, Text, Image} from 'react-native'
import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'

const NoImage = require("../../../assets/noimage.png")

const GameHeader = ({ 
  image, 
  name, 
  developers, 
  released,
   }) => {

  //Deconstrution of data for display
  const allDevelopers = developers.map(developers => developers.name).join(' / ');


  return (
    // Main Image / Game Title / Developers
    <View style={styles.container}>
      <View>
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
      <View style={styles.gameTitleBox}>
        <Text style={styles.gameTitle}>{name}</Text>
        <Text style={styles.gameDevelopers}>{allDevelopers}</Text>  
        <Text style={styles.date}>Release Date: {released}</Text>
      </View>
    </View>
  )
}

export default GameHeader