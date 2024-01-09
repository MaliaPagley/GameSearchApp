import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Image } from "react-native";

import { icons } from "../../../../constants";
import styles from "../platforms/gameplatforms.style";

const GamePlatforms = ({ platforms }) => {
  const platformNames = platforms
    ? platforms.map((item) => item.platform.name)
    : [];
  const platformMapping = {
    PlayStation: <Ionicons name="logo-playstation" size={32} color="white" />,
    Xbox: <Ionicons name="logo-xbox" size={32} color="white" />,
    macOS: <Ionicons name="logo-apple" size={32} color="white" />,
    PC: <Ionicons name="logo-windows" size={32} color="white" />,
    iOS: <Ionicons name="phone-portrait" size={32} color="white" />,
    "Nintendo Switch": <Image style={styles.icon} source={icons.nintendo} />,
    Android: <Ionicons name="logo-android" size={32} color="white" />,
  };

  const renderedPlatforms = {};

  const modifiedPlatforms = platformNames
    .map((platform) => {
      if (platform.startsWith("PlayStation")) {
        if (!renderedPlatforms.PlayStation) {
          renderedPlatforms.PlayStation = true;
          return "PlayStation";
        }
        return null;
      } else if (platform.startsWith("Xbox")) {
        if (!renderedPlatforms.Xbox) {
          renderedPlatforms.Xbox = true;
          return "Xbox";
        }
        return null;
      }
      return platform;
    })
    .filter((platform) => platform !== null);

  function renderPlatformIcons() {
    if (!Array.isArray(modifiedPlatforms) || modifiedPlatforms.length === 0) {
      return (
        <View testID="default-icon">
          <Ionicons name="game-controller-outline" color="white" size={32} />
        </View>
      );
    }

    return modifiedPlatforms.map((platform, index) => {
      const platformRender = platformMapping[platform];

      if (platformRender) {
        return (
          <View testID={`${platform.toLowerCase()}-icon`} key={index}>
            {platformRender}
          </View>
        );
      } else {
        return null;
      }
    });
  }

  return <View style={styles.platformContainer}>{renderPlatformIcons()}</View>;
};

export default GamePlatforms;
