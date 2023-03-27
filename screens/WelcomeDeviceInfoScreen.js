import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './WelcomeScreen';
import DeviceInfoScreen from './DeviceInfoScreen';
import { Iconicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const WelcomeDeviceInfoScreen = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = 'ios-list';
                if (route.name === 'Welcome') {
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                } else if (route.name === 'DeviceInfo') {
                    iconName = 'ios-list';
                }
                return <Iconicons name={iconName} size={size} color={color}/>;
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
