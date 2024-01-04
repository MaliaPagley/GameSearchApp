import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GameTabScreenshots from './options/screenshots/GameTabScreenshots';
import GameTabPreview from './options/preview/GameTabPreview';
import styles from './gametabs.style';

const GameTabOptions = ({ id, name }) => {
  const [activeTab, setActiveTab] = useState('Screenshots');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View>
      <View style={styles.tabButtonsContainer}>
        <TouchableOpacity onPress={() => handleTabPress('Screenshots')}>
          <Text style={activeTab === 'Screenshots' ? styles.activeTab : styles.inactiveTab}>
            Screenshots
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Preview')}>
          <Text style={activeTab === 'Preview' ? styles.activeTab : styles.inactiveTab}>
            Preview
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Screenshots' && 
      <View testID='screenshotsID'>
        <GameTabScreenshots id={id} />
      </View>}
      {activeTab === 'Preview' && 
      <View testID='previewID'>
        <GameTabPreview testID='previewID' name={name} />
      </View>}
    </View>
  );
};

export default GameTabOptions;
