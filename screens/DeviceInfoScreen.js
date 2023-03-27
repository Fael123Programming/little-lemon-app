import React, {useState} from 'react';
import {
    Text,
    ScrollView,
    View,
    Platform,
    StyleSheet,
    useWindowDimensions,
    useColorScheme
} from 'react-native';
import colors from '../utils/Colors';
// import { useDeviceOrientation } from '@react-native-community/hooks';

const DeviceInfoScreen = () => {
    const window = useWindowDimensions();
    const colorScheme = useColorScheme();
    return (
        <ScrollView keyboardDismissMode={'on-drag'}>
            <View style={deviceInfoStyle.container}>
                <Text style={deviceInfoStyle.title}>Device Info</Text>
                <Text style={deviceInfoStyle.regularText}>Theme: {colorScheme}</Text>
                <Text style={deviceInfoStyle.regularText}>OS: {Platform.OS}</Text>
                <Text style={deviceInfoStyle.regularText}>Screen width: {window.width}</Text>
                <Text style={deviceInfoStyle.regularText}>Screen height: {window.height}</Text>
                <Text style={deviceInfoStyle.regularText}>Screen font scale: {window.fontScale}</Text>
            </View>
        </ScrollView>
    );
}

const deviceInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        width: 350,
        height: 100,
        margin: 20,
        padding: 20,
        backgroundColor: colors.yellow,
        textAlign: 'center'
    },
    regularText: {
        fontSize: 30,
        width: 350,
        height: 100,
        margin: 20,
        backgroundColor: colors.grey,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default DeviceInfoScreen;
