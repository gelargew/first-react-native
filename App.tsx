import React, { useState } from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';
import { TextForm } from './src/screens/FormsAndEvent';

import { globalStateType } from './src/components/types';

const { UIManager } = NativeModules
const globalState = React.createContext<globalStateType | null >(null)

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <globalState.Provider value={{darkTheme, setDarkTheme}}>
      <View style={styles.container}>
        <TextForm />
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
