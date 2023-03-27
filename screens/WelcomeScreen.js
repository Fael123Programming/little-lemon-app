import React, { useState } from 'react';
import { 
    Text, 
    ScrollView, 
    View, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform,
    Image
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colors from '../utils/Colors';

export default WelcomeScreen = () => {
    const [username, onChangeUsername] = useState('');

    return (
        <KeyboardAvoidingView
            style={welcomeStyle.container}
            behavior={Platform.OS === 'ios' ? 'padding' :  'height'}
        >   
            <Header text={'Greetings'}/>
            <ScrollView 
                indicatorStyle={'white'} 
                keyboardDismissMode={'on-drag'}
                style={{ flex: .9}}
            >
                <View style={welcomeStyle.logoContainer}>
                    <Image
                        style={welcomeStyle.logo}
                        source={require('../img/logo.png')}
                        resizeMode={'cover'}
                        accessible={true}
                        accessibilityLabel={'Little Lemon logo'}
                    />
                    <Text style={welcomeStyle.logoText}>Little Lemon</Text>
                </View>
                <View>
                    <Text 
                        style={welcomeStyle.title} 
                        numberOfLines={3}
                    >Welcome to Little Lemon, your local mediterranean bistro</Text>
                </View>
                <View>
                    <Text style={welcomeStyle.welcomeText}>
                        Little Lemon is a charming neighborhood bistro that serves 
                        simple food and classic cocktails in a lively but casual environment. 
                        We would love to hear more about your experience with us!
                    </Text>
                </View>
                <TextInput
                    style={welcomeStyle.input}
                    value={username}
                    onChangeText={onChangeUsername}
                    placeholder={'Full name'}
                />
                <Image
                    style={welcomeStyle.image}
                    source={require('../img/paper.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Menu paper'}
                />
                <Image
                    style={welcomeStyle.image}
                    source={require('../img/lobster.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Lobster'}
                />
                <Image
                    style={welcomeStyle.image}
                    source={require('../img/orange.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Orange'}
                />
                <Image
                    style={welcomeStyle.image}
                    source={require('../img/pork_with_potatoes.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Pork with potatoes'}
                />
                <Footer/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const welcomeStyle = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: colors.black,
    },
    title: { 
        fontSize: 26, 
        color: colors.white, 
        textAlign: 'center', 
        padding: 30,
        fontStyle: 'italic'
    },
    logoText: {
        fontSize: 26, 
        color: colors.white, 
        textAlign: 'center', 
        fontStyle: 'italic',
        padding: 20
    },
    logoContainer: { 
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'center',
        padding: 50
    },
    welcomeText: { 
        color: colors.white, 
        fontSize: 26, 
        textAlign: 'center', 
        padding: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 50,
        fontSize: 16,
        borderColor: colors.black,
        backgroundColor: colors.white,
        color: colors.black,
    },
    logo: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    image: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        margin: 30,
        borderWidth: 1,
        borderColor: colors.black
    }
});
