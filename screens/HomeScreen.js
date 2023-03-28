import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../utils/Colors';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomeScreen = () => (
    <KeyboardAvoidingView 
        style={homeStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >   
        <Header text={'Little Lemon'}/>
        <View style={homeStyles.innerContainer}></View>
        <Footer/>
    </KeyboardAvoidingView>
);


const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    innerContainer: {
        flex: .85,
    }
});

export default HomeScreen;
