import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './Colors';

export default Footer = function() {
    return (
        <View style={footerStyle.container}>
            <Text style={footerStyle.text}>All rights reserved by Little Lemon, {getCurrentYear()}{' '}</Text>
        </View>
    );
}

function getCurrentYear() {
    return new Date().getFullYear();
}

const footerStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.brown
    },
    text: { 
        color: 'black', 
        fontSize: 18, 
        textAlign: 'center'
    }
});
