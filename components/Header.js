import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/Colors';

// flex means the percentage of space to use from the parent component.

export default Header = function({text}) {
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.title}>
                {text}
            </Text>
        </View>
    );
}

const headerStyle = StyleSheet.create({
    container: {
        flex: .1, 
        backgroundColor: colors.brown, 
        justifyContent: 'center', 
        // alignItems: 'center'
    },
    title: {
        fontSize: 30, 
        color: 'black', 
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
