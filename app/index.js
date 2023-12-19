import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Newgames, Populargames, Welcome } from '../components';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: 15
        }}>
          <Welcome />
          <Populargames />
          <Newgames />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
