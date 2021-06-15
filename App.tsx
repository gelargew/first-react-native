import React, { useState } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';
import { TextForm } from './src/screens/FormsAndEvent';
import { Timer } from './src/screens/Timer';

import { globalStateType } from './src/components/types';

const { UIManager } = NativeModules
export const globalState = React.createContext({} as globalStateType)

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <globalState.Provider value={{darkTheme, setDarkTheme}}>
      <View style={styles.container}>
        <Timer />
      </View>
    </globalState.Provider>
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
