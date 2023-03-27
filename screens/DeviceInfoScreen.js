import React, {useState} from 'react';
import {
    Text,
    View,
    Platform,
    StyleSheet,
    useWindowDimensions,
    useColorScheme
} from 'react-native';
import colors from '../utils/Colors';
// import { useAppState } from '@react-native-community/hooks';
// import { useDeviceOrientation } from '@react-native-community/hooks';

const DeviceInfoScreen = () => {
    const window = useWindowDimensions();
    const colorScheme = useColorScheme();
    return (
        <View style={deviceInfoStyle.container}>
            <Text style={deviceInfoStyle.title}>Device Info</Text>
            <Text style={deviceInfoStyle.regularText}>Theme: {colorScheme}</Text>
            <Text style={deviceInfoStyle.regularText}>OS: {Platform.OS}</Text>
            <Text style={deviceInfoStyle.regularText}>Screen width: {window.width}</Text>
            <Text style={deviceInfoStyle.regularText}>Screen height: {window.height}</Text>
            <Text style={deviceInfoStyle.regularText}>Screen font scale: {window.fontScale}</Text>
        </View>
    );
}

const deviceInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 36,
        width: 400,
        height: 100,
        margin: 20,
        padding: 20,
        backgroundColor: colors.yellow,
        textAlign: 'center'
    },
    regularText: {
        fontSize: 30,
        width: 400,
        height: 100,
        margin: 20,
        backgroundColor: colors.grey,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default DeviceInfoScreen;
