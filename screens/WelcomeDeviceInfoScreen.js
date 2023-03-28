import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './WelcomeScreen';
import DeviceInfoScreen from './DeviceInfoScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const WelcomeDeviceInfoScreen = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Welcome') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                } else if (route.name === 'DeviceInfo') {
                    iconName = 'list';
                }
                return <Ionicons name={iconName} size={size} color={color}/>;
              },
              tabBarActiveTintColor: 'black',
              tabBarInactiveTintColor: 'grey'
            })}
        >
            <Tab.Screen name='Welcome' component={WelcomeScreen}/>
            <Tab.Screen name='DeviceInfo' component={DeviceInfoScreen}/>
        </Tab.Navigator>
    );
}

export default WelcomeDeviceInfoScreen;
