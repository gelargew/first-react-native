import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Timer } from './screens/Timer';
import { TextForm } from './screens/FormsAndEvent';
import { Dashboard } from './screens/Dashboard';
import { ListScreen } from './screens/Flatlist';
import { globalState } from '../App';
import { LoginScreen } from './screens/Auth';
import { Kpauli } from './screens/Kpauli';


const Drawer = createDrawerNavigator()

export const Routes = () => {
    const {user} = useContext(globalState)

    return (
        <>
        {user.email
        ?
        <NavigationContainer >
            <Drawer.Navigator openByDefault drawerType='permanent' drawerStyle={{width: 150, backgroundColor: 'teal'}} initialRouteName='Timer'>
                <Drawer.Screen name='Dashboard' component={Dashboard} />
                <Drawer.Screen name='Timer' component={Timer} />
                <Drawer.Screen name='Form' component={TextForm} />
                <Drawer.Screen name='List' component={ListScreen} />
                <Drawer.Screen name='Kpauli' component={Kpauli} />
            </Drawer.Navigator>
        </NavigationContainer>
        :
        <LoginScreen/>
        }
        </>
    )
}