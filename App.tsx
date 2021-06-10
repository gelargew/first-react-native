import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FadeInView, InfiniteRotation } from './src/components/Animations';
import { MyText } from './src/components/commons';

import { Dashboard } from './src/screens/state'
import { Style } from './src/screens/style'

export default function App() {
  return (
    <View style={styles.container}>
      <FadeInView style={{width: 300, height: 200}}>
        <MyText style={{fontSize: 70}}>Rotating</MyText>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
