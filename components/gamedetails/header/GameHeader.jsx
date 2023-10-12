import React from 'react'
import { View, Text, Image} from 'react-native'


import styles from './gameheader.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'
const NoImage = require("../../../assets/noimage.png")

const GameHeader = ({ image, id, name, description, developers, addImage, genres}) => {

  const allDevelopers = developers.map(developers => developers.name).join(' / ');

 
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
      {checkImageURL(image) ?  
        <Image
          source={{
            uri: image,
          }}
          resizeMode='contain'
          style={styles.backgroundImage}
      /> 
      :
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
      </View>

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
      <Image
          source={NoImage}
          resizeMode='contain'
          style={styles.backgroundImage}
      /> 
      }
      </View>
      <View style={styles.gameGenresBox}>
      <Text style={styles.gameGenres}>{genres}</Text>
      </View>

      <><Text style={styles.pageHeaders}>About:</Text></>

      <View style={styles.gameInfoBox} horizontal>
        
        <Text style={styles.gameInfo}>{description}</Text>
      </View>

     

    
    </View>
  )
}

export default GameHeader