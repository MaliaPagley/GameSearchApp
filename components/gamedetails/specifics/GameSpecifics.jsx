import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './gamespecifics.style';
import { icons } from '../../../constants';

const GameSpecifics = ({ platforms, tags }) => {

  // TAG HANDLING SECTION 
  const tagMapping = {
    "Singleplayer": {
      icon: <Ionicons name="person-circle-outline" size={30} color="white" />,
      text: "Singleplayer"
    },
    "Multiplayer": {
      icon: <Ionicons name="people-circle-outline" size={30} color="white" />,
      text: "Multiplayer"
    },
    "Open World": {
      icon: <Ionicons name="earth-outline" size={30} color="white" />,
      text: "Open World"
    },
    "open-world": {
      icon: <Ionicons name="earth-outline" size={30} color="white" />,
      text: "Open World"
    },
    "Online Co-Op": {
      icon: <Ionicons name="globe-outline" size={30} color="white" />,
      text: "Online Co-Op"
    },
    "Local Co-Op": {
      icon: <Ionicons name="people-outline" size={30} color="white" />,
      text: "Local Co-Op"
    } ,
    "Moddable" : {
      icon: <Ionicons name="settings-outline" size={30} color="white" />,
      text: "Moddable"
    },
    "modding" : {
      icon: <Ionicons name="settings-outline" size={30} color="white" />,
      text: "Moddable"
    },
    "Sandbox" : {
      icon: <Ionicons name="expand-outline" size={30} color="white" />,
      text: "Sandbox"
    },
  };

  let tagArray = [];

  if (typeof tags === 'string') {
    // Split the comma-separated tags into an array
    tagArray = tags.split(',').map(tag => tag.trim());
  } else if (Array.isArray(tags)) {
    tagArray = tags;
  }

  // Create an array to store the rendered tag icons with text
  const renderedTags = tagArray.map(tag => {
    const tagData = tagMapping[tag];
    if (tagData) {
      return (
        <View style={styles.tag} key={tag}>
          {tagData.icon}
          <Text style={styles.tagText}>{tagData.text}</Text>
        </View>
      );
    }
    return null;
  });

  // PLATFORM HANDLING SECTION
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
    <>
    <View style={styles.tagContainer}>
      {renderedTags}
    </View>

    <View style={styles.platformContainer}>
      {renderPlatformIcons()}
    </View>
    </>
  );
};

export default GameSpecifics;
