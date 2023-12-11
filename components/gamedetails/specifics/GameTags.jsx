import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from './gamespecifics.style';

const GameTags = ({ tags }) => {
  const tagNames = tags ? tags.map(item => item.name) : [];

  const tagMapping = {
    "Singleplayer": {
      icon: <Ionicons name="person-circle-outline" size={28} color="white" />,
      text: "Singleplayer"
    },
    "Multiplayer": {
      icon: <Ionicons name="people-circle-outline" size={28} color="white" />,
      text: "Multiplayer"
    },
    "Open World": {
      icon: <Ionicons name="earth-outline" size={28} color="white" />,
      text: "Open World"
    },
    "open-world": {
      icon: <Ionicons name="earth-outline" size={28} color="white" />,
      text: "Open World"
    },
    "Online Co-Op": {
      icon: <Ionicons name="people" size={28} color="white" />,
      text: "Online Co-Op"
    },
    "Local Co-Op": {
      icon: <Ionicons name="people-outline" size={28} color="white" />,
      text: "Local Co-Op"
    } ,
    "Moddable" : {
      icon: <Ionicons name="settings-outline" size={28} color="white" />,
      text: "Moddable"
    },
    "modding" : {
      icon: <Ionicons name="settings-outline" size={28} color="white" />,
      text: "Moddable"
    },
    "Sandbox" : {
      icon: <Ionicons name="expand-outline" size={28} color="white" />,
      text: "Sandbox"
    },
    "First-Person" : {
      icon: <Ionicons name="locate-outline" size={28} color="white"/>,
      text: "First Person"
    },
    "Third-Person" : {
      icon: <Ionicons name="locate-outline" size={28} color="white"/>,
      text: "Third Person"
    }
  };

  let tagArray = [];

  if (typeof tagNames === 'string') {
    // Split the comma-separated tags into an array
    tagArray = tagNames.split(',').map(tag => tag.trim());
  } else if (Array.isArray(tagNames)) {
    tagArray = tagNames;
  }

  // Create an array to store the rendered tag icons with text
  const renderedTags = tagArray.map(tag => {
    const tagData = tagMapping[tag];
    if (tagData) {
      return (
        <View  testID={`${tag.toLowerCase()}-tag`} 
         style={styles.tag} key={tag}>
          {tagData.icon}
          <Text style={styles.tagText}>{tagData.text}</Text>
        </View>
      );
    }
    return null;
  });
  return (
    <View style={styles.tagContainer}>
        {renderedTags}
    </View>
  )
}
export default GameTags;