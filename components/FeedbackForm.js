import React from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../utils/Colors';

const FeedbackForm = () => {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    const [msg, onChangeMsg] = React.useState('');

    return (
        <KeyboardAvoidingView
            style={fbFormStyles.container}
            behavior= {Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView keyboardDismissMode={'on-drag'}>
                <Text style={fbFormStyles.title}>
                    How was your visit to Little Lemon?
                </Text>
                <Text style={fbFormStyles.infoSection}>
                    Little Lemon is a charming neighbourhood bistro that serves simple food
                    and classic cocktails in a lively but casual environment. We would love
                    to hear your experience with us!
                </Text>
                <TextInput 
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    style={fbFormStyles.input}
                    placeholder={'First name'}
                    maxLength={50}
                />
                <TextInput 
                    value={lastName}
                    onChangeText={onChangeLastName}
                    style={fbFormStyles.input}
                    placeholder={'Last name'}
                    maxLength={50}
                />
                <TextInput
                    value={phoneNumber}
                    onChangeText={onChangePhoneNumber}
                    style={fbFormStyles.input}
                    placeholder={'Phone number'}
                    maxLength={15}
                    keyboardType={'phone-pad'}
                />
                <TextInput 
                    value={msg}
                    onChangeText={onChangeMsg}
                    style={[fbFormStyles.input, fbFormStyles.largeInput]}
                    placeholder={'Please, leave feedback'}
                    multiline={true}
                    maxLength={250}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const fbFormStyles = StyleSheet.create({
    container: {
        flex: .9,
        backgroundColor: colors.black
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.white,
        paddingTop: 40
    },
    infoSection: {
        fontSize: 25,
        textAlign: 'center',
        color: colors.white,
        paddingTop: 40,
        paddingBottom: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: colors.white,
        backgroundColor: colors.yellow,
        color: colors.black
    },
    largeInput: {
        height: 80
    }
});

export default FeedbackForm;
