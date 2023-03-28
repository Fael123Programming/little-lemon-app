import WelcomeDeviceInfoNavigator from './navigators/WelcomeDeviceInfoNavigator';
import HomeMenuNavigator from './navigators/HomeMenuNavigator';
import LoginScreen from './screens/LoginScreen';
import colors from './utils/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='WelcomeDevice' 
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
            component={WelcomeDeviceInfoNavigator} 
            options={{ 
              title: 'Congratulations!',
            }}
          />
          <Stack.Screen 
            name='Login' 
            component={LoginScreen} 
            options={{title: 'Join us!'}}
          />
          <Stack.Screen 
            name='HomeMenu' 
            component={HomeMenuNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
