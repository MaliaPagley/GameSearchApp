import { Ionicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { View, Image, ActivityIndicator, FlatList, Text } from "react-native";

import useFetch from "../../../../../hook/useFetch";
import { checkImageURL } from "../../../../../utils";
import styles from "../screenshots/gametabscreenshots.style";

const GameTabScreenshots = ({ id }) => {
  const { data, isLoading, error } = useFetch(`screenshots/${id}`);

  const screenshots = data?.results || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef();

  const renderScreenshot = ({ item, index }) => {
    const isActive = index === activeIndex;

    return (
      <View style={styles.slide} key={index}>
        {checkImageURL(item.image) ? (
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={[
              styles.addBackgroundImage,
              isActive && styles.activeBackgroundImage,
            ]}
            testID={`screenshot-${index}`}
          />
        ) : (
          <Image
            source={require("../../../../../assets/noimage.png")}
            resizeMode="contain"
            style={[
              styles.addBackgroundImage,
              isActive && styles.activeBackgroundImage,
            ]}
            testID={`screenshot-default-${index}`}
          />
        )}
      </View>
    );
  };

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / styles.slide.width);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToIndex({ index, animated: true });
    }
  };

  if (isLoading) {
    return (
      <View testID="loadingID" style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>Screenshots are Unavailable</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {screenshots.length > 0 ? (
        <>
          <FlatList
            ref={scrollViewRef}
            data={screenshots}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderScreenshot}
            contentContainerStyle={styles.indicatorContainer}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            horizontal
            pagingEnabled
          />

          {screenshots.length > 1 && (
            <View style={styles.indicatorContainer}>
              {screenshots.map((_, index) => (
                <Ionicons
                  key={index}
                  name="remove-outline"
                  size={32}
                  color="white"
                  style={[
                    styles.indicatorText,
                    index === activeIndex && styles.activeIndicatorText,
                  ]}
                  onPress={() => scrollToIndex(index)}
                  testID={`indicator-${index}`}
                />
              ))}
            </View>
          )}
        </>
      ) : (
        <View style={styles.slide}>
          <Image
            source={require("../../../../../assets/noimage.png")}
            resizeMode="contain"
            style={styles.addBackgroundImage}
            testID="screenshot-default"
          />
          <View style={styles.indicatorContainer}>
            <Ionicons
              name="remove-outline"
              size={32}
              color="white"
              style={[styles.indicatorText, styles.activeIndicatorText]}
              testID="indicator-1"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default GameTabScreenshots;
