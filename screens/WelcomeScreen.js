import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import colors from '../utils/Colors';

export default WelcomeScreen = () => {
    const [username, onChangeUsername] = useState('');

    return (
        <KeyboardAvoidingView
            style={welcomeScreenStyle.container}
            behavior={Platform.OS === 'ios' ? 'padding' :  'height'}
        >   
            <Header text={'Greetings'}/>
            <ScrollView 
                indicatorStyle={'white'} 
                keyboardDismissMode={'on-drag'}
                style={{ flex: .9}}
            >
                <View style={{ flex: .1 }}>
                    <Text style={welcomeScreenStyle.title} numberOfLines={2}>Welcome to Little{'\n'}Lemon</Text>
                </View>
                <View style={{ flex: .75}}>
                    <Text style={welcomeScreenStyle.welcomeText}>
                        Little Lemon is a charming neighborhood bistro that serves 
                        simple food and classic cocktails in a lively but casual environment. 
                        We would love to hear more about your experience with us!
                    </Text>
                </View>
                <TextInput
                    style={welcomeScreenStyle.input}
                    value={username}
                    onChangeText={onChangeUsername}
                    placeholder={'Full name'}
                />
                <Footer/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const welcomeScreenStyle = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: colors.black
    },
    title: { 
        fontSize: 30, 
        color: colors.white, 
        textAlign: 'center', 
        padding: 30
    },
    welcomeText: { 
        color: 'white', 
        fontSize: 28, 
        textAlign: 'center', 
        padding: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 175,
        fontSize: 16,
        borderColor: colors.black,
        backgroundColor: colors.white,
        color: colors.black,
        flex: .1
    }
});
