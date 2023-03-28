import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';

const Drawer = createDrawerNavigator();

const HomeMenuNavigator = () => {
    return (
        <Drawer.Navigator 
            useLegacyImplementation
            screenOptions={{ headerShown: true, headerTitleAlign: 'center'}}
            initialRouteName={'Home'}
        >
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Menu' component={MenuScreen}/>
        </Drawer.Navigator>
    );
}

export default HomeMenuNavigator;
