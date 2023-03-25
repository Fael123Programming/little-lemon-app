import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const textArray = ['Little Lemon is a \n charming \n neighborhood bistro \n that serves simple \n food and classic \n cocktails in a lively \n but casual \n environment. We \n would love to hear \n more about your \n experience with us!']

export default WelcomeScreen = () => {
    return (
        <ScrollView style={WelcomeScreenStyle.container} indicatorStyle={"white"}>
            <Text style={WelcomeScreenStyle.title} numberOfLines={2}>Welcome to Little{'\n'}Lemon</Text>
            <Text style={WelcomeScreenStyle.welcomeText}>
                {textArray}
            </Text>
        </ScrollView>
    );
}

const WelcomeScreenStyle = StyleSheet.create({
    container: { 
        flex: .9, 
        backgroundColor: '#495E57' 
    },
    title: { 
        fontSize: 40, 
        color: '#CAD3D7', 
        textAlign: 'center', 
        padding: 30
    },
    welcomeText: { 
        color: 'white', 
        fontSize: 38, 
        textAlign: 'center', 
        padding: 30
    }
});
