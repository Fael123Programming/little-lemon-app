import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import Header from './components/Header';
import Footer from './components/Footer';
import colors from './components/Colors';

export default function App() {
  return (
    <View style={appStyle.container}>
      <Header text={'Little Lemon'}/>
      <MenuItems/>
      <Footer/>
    </View>
  );
}

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});
