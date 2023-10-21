import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './specifics.style';
import { icons } from '../../../constants';

const Specifics = ({ platforms }) => {
  
  const platformMapping = {
    "PlayStation": <Ionicons name="logo-playstation" size={32} color="white" />,
    "Xbox": <Ionicons name="logo-xbox" size={32} color="white" />,
    "macOS": <Ionicons name="logo-apple" size={32} color="white" />,
    "PC": <Ionicons name="logo-windows" size={32} color="white" />,
    "iOS": <Ionicons name="phone-portrait" size={32} color={"white"} />,
    "Nintendo Switch": <Image style={styles.icon} source={icons.nintendo} />,
    "Android": <Ionicons name="logo-android" size={32} color={"white"} />
  };

  const renderedPlatforms = {}; // Object to track rendered platforms

  // Modify platform names and ensure only one "PlayStation" and one "Xbox" are rendered
  const modifiedPlatforms = platforms.map(platform => {
    if (platform.startsWith('PlayStation')) {
      if (!renderedPlatforms.PlayStation) {
        renderedPlatforms.PlayStation = true;
        return 'PlayStation';
      }
      return null; // Return null for additional "PlayStation" platforms
    } else if (platform.startsWith('Xbox')) {
      if (!renderedPlatforms.Xbox) {
        renderedPlatforms.Xbox = true;
        return 'Xbox';
      }
      return null; // Return null for additional "Xbox" platforms
    }
    return platform;
  }).filter(platform => platform !== null);

  function renderPlatformIcons() {
    if (!modifiedPlatforms || !Array.isArray(modifiedPlatforms)) {
      return null;
    }

    return modifiedPlatforms.map((platform, index) => {
      const platformRender = platformMapping[platform];

      if (platformRender) {
        return (
          <View key={index}>
            {platformRender}
          </View>
        );
      } else {
        return null;
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
