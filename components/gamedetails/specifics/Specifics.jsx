import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons/FontAwesome'
import styles from './specifics.style';
import { icons } from '../../../constants'

const Specifics = ({ platforms }) => {
  const componentMapping = {
    "PlayStation 5": <Ionicons name="logo-playstation" size={32} color="white" />,
    "PlayStation 4": <Ionicons name="logo-playstation" size={32} color="white" />,
    "Xbox 360" : <Ionicons name="logo-xbox" size={32} color="white" />,
    "Xbox One": <Ionicons name="logo-xbox" size={32} color="white" />,
    "MacOS": <Ionicons name="logo-apple" size={32} color="white" />,
    "PC": <Ionicons name="logo-windows" size={32} color="white" />,
    "Nintendo Switch": <Image style={styles.icon} source={icons.nintendo} />, // Replace with the actual image asset

    
  };

  function renderPlatformIcons() {
    return platforms.map((platform, index) => {
      const component = componentMapping[platform];

      if (component) {
        return (
          <View key={index}>
            {component}
          </View>
        );
      } else {
        return (
          null
        );
      }
    });
  }

  return (
    <View style={styles.platformContainer}>
      {renderPlatformIcons()}
    </View>
  );
};

export default Specifics;
