import React, { useState } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Timer } from './src/screens/Timer';

import { globalStateType } from './src/components/types';
import { Dashboard } from './src/screens/Dashboard';
import { TextForm } from './src/screens/FormsAndEvent';

const Drawer = createDrawerNavigator()
export const globalState = React.createContext({} as globalStateType)

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <globalState.Provider value={{darkTheme, setDarkTheme}}>
      <NavigationContainer >      
        <Drawer.Navigator openByDefault drawerType='permanent' drawerStyle={{width: 150, backgroundColor: '#222'}} initialRouteName='Timer'>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
            <Drawer.Screen name='Timer' component={Timer} />
            <Drawer.Screen name='Form' component={TextForm} />
        </Drawer.Navigator>

      </NavigationContainer>
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
