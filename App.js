import WelcomeDeviceInfoScreen from './screens/WelcomeDeviceInfoScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './utils/Colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Welcome' 
          screenOptions={
            { 
              headerStyle: { backgroundColor: colors.grey },
              headerTintColor: colors.white,
              headerTitleStyle:{
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center'
            }
          }>
          <Stack.Screen 
            name='WelcomeDevice'
            component={WelcomeDeviceInfoScreen} 
            options={{ 
              title: 'Congratulations!',
            }}
          />
          <Stack.Screen name='Login' component={LoginScreen} options={{title: 'Join us!'}}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
