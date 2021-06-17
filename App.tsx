import React, { useState } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';
import { globalStateType } from './src/components/types';
import { Routes } from './src/Routes';



export const globalState = React.createContext({} as globalStateType)

export default function App() {
  const [user, setUser] = useState<any>({})
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <globalState.Provider value={{darkTheme, setDarkTheme, user, setUser}}>
      <Routes />
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
