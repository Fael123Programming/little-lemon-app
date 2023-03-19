import React from 'react';
import { View, Text } from 'react-native';

// flex means the percentage of space to use from the parent component.

export default Header = function({text}) {
    return (
        <View style={{ flex: .1, backgroundColor: '#F4CE14', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>
                {text}
            </Text>
        </View>
    );
}
