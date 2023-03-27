import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DeviceInfoScreen from './screens/DeviceInfoScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <LoginScreen/>
      </NavigationContainer>
  );
}

