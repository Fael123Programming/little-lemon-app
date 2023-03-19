import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default WelcomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#495E57' }}>
            <Header text={'Little Lemon'}/>
            <View style={{ flex: .2, justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: '#CAD3D7', textAlign: 'center' }} numberOfLines={2}>Welcome to Little{'\n'}Lemon</Text>
            </View>
            <View style={{ flex: .7 }}>
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center' }} numberOfLines={7}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </View> 
            <Footer/>
        </View>
    );
}
