import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const HomeMenuNavigator = () => {
    return (
        <Drawer.Navigator 
            useLegacyImplementation
            screenOptions={({ route }) => ({
                headerTitleAlign: 'center',
                drawerPosition: 'left',
                drawerIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (route.name === 'Menu') {
                        iconName = focused ? 'book' : 'book-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size}/>
                },
                drawerActiveTintColor: 'black',
                drawerInactiveTintColor: 'grey'
            })}
            initialRouteName={'Home'}
        >
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Menu' component={MenuScreen}/>
        </Drawer.Navigator>
    );
}

export default HomeMenuNavigator;
