import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Dashboard } from './src/screens/state'
import { Style } from './src/screens/style'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx asd start working on your app!</Text>
      <Style />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
