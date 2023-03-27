import React, { useState } from 'react';
import { 
    Text, 
    ScrollView, 
    View, 
    StyleSheet, 
    KeyboardAvoidingView, 
    Platform,
    Image,
    useColorScheme,
    Pressable
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import colors from '../utils/Colors';

export default WelcomeScreen = ({navigation}) => {
    // const [username, onChangeUsername] = useState('');
    const colorScheme = useColorScheme();
    return (
        <KeyboardAvoidingView
            style={[welcomeStyle.container, colorScheme === 'dark' ? {backgroundColor: colors.black} : {backgroundColor: colors.white}]}
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
                    <Text style={[welcomeStyle.logoText, colorScheme === 'dark' ? {color: colors.white} : {color: colors.black}]}>Little Lemon</Text>
                </View>
                <Text 
                    style={[welcomeStyle.title, colorScheme === 'dark' ? {color: colors.white} : {color: colors.black}]} 
                    numberOfLines={3}
                >Welcome to Little Lemon, your local mediterranean bistro</Text>
                <View>
                    <Text style={[welcomeStyle.welcomeText, colorScheme === 'dark' ? {color: colors.white} : {color: colors.black}]}>
                        Little Lemon is a charming neighborhood bistro that serves 
                        simple food and classic cocktails in a lively but casual environment. 
                        We would love to hear more about your experience with us!
                    </Text>
                </View>
                <Pressable 
                    style={welcomeStyle.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={welcomeStyle.buttonText}>Hungry?!</Text>
                </Pressable>
                {/* <TextInput
                    style={
                        [
                            welcomeStyle.input, 
                            colorScheme === 'dark' ? 
                            {
                                borderColor: colors.white,
                            } : 
                            {
                                borderColor: colors.black,
                            }
                        ]
                    }
                    value={username}
                    onChangeText={onChangeUsername}
                    placeholder={'Full name'}
                /> */}
                <Image
                    style={[welcomeStyle.image, colorScheme === 'dark' ? {borderColor: colors.white} : {borderColor: colors.black}]}
                    source={require('../img/paper.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Menu paper'}
                />
                <Image
                    style={[welcomeStyle.image, colorScheme === 'dark' ? {borderColor: colors.white} : {borderColor: colors.black}]}
                    source={require('../img/lobster.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Lobster'}
                />
                <Image
                    style={[welcomeStyle.image, colorScheme === 'dark' ? {borderColor: colors.white} : {borderColor: colors.black}]}
                    source={require('../img/orange.png')}
                    resizeMode={'cover'}
                    accessible={true}
                    accessibilityLabel={'Orange'}
                />
                <Image
                    style={[welcomeStyle.image, colorScheme === 'dark' ? {borderColor: colors.white} : {borderColor: colors.black}]}
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
        textAlign: 'center', 
        padding: 30,
        fontStyle: 'italic'
    },
    logoText: {
        fontSize: 26, 
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
        color: colors.dark,
        backgroundColor: colors.white
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
    },
    button: {
        padding: 15,
        margin: 40,
        backgroundColor: colors.brown,
        borderColor: colors.brown,
        borderWidth: 1,
        borderRadius: 30,
        width: 200,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});
