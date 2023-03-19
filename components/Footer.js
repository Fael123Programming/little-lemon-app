import React from 'react';
import { View, Text } from 'react-native';

export default Footer = function() {
    return (
        <View style={{ flex: .03, backgroundColor: '#F4CE14'}}>
            <Text style={{ color: 'black', fontSize: 18, textAlign: 'center'}}>All rights reserved by Little Lemon, {getCurrentYear()}{' '}</Text>
        </View>
    );
}

function getCurrentYear() {
    return new Date().getFullYear();
}
