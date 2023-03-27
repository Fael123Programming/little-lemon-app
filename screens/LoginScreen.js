import React, {useState} from 'react';
import { 
    KeyboardAvoidingView, 
    ScrollView, 
    View, 
    Text, 
    TextInput, 
    Platform, 
    StyleSheet, 
    Alert, 
    Pressable,
} from 'react-native';
import colors from '../utils/Colors';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LoginScreen = () => {
    const [password, onChangePassword] = useState('');
    const [email, onChangeEmail] = useState('');
    const [showLogin, setShowLogin] = useState(true);

    return (
        <KeyboardAvoidingView 
            style={loginStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Header text={'Little Lemon'}/>  
            <ScrollView 
                keyboardDismissMode={'on-drag'}
                style={{ flex: .9 }}
            >   
                <View
                    style={loginStyles.headerTitle}
                >
                    <Text style={loginStyles.headerTitleText}>
                        Welcome to Little Lemon
                    </Text>
                </View>
                {
                    !showLogin && (
                        <View style={[loginStyles.subheaderTitle, {marginBottom: 510}]}>
                            <Text style={loginStyles.subheaderTitleText}>
                               You are logged in!
                            </Text>
                        </View>
                    )
                }
                {
                    showLogin && (
                        <View style={loginStyles.subheaderTitle}>
                            <Text style={loginStyles.subheaderTitleText}>
                                Login to continue
                            </Text>
                        </View>
                    )
                }
                {
                    showLogin && (
                        <View style={loginStyles.loginContainer}>
                            <TextInput
                                value={email}
                                onChangeText={onChangeEmail}
                                style={loginStyles.input}
                                placeholder={'E-mail'}
                                keyboardType={'email-address'}
                                maxLength={100}
                                // onFocus={Alert.alert('E-mail address is blank')}
                                onBlur={() => {
                                        if (email.length == 0) {
                                            Alert.alert('Please, fill in the e-mail field')
                                        }
                                    }
                                }
                                clearButtonMode={'always'}
                            />
                            <TextInput 
                                value={password}
                                onChangeText={onChangePassword}
                                style={loginStyles.input}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                maxLength={10}
                                keyboardType={'default'}
                            />
                            <Pressable
                                style={[loginStyles.button, {marginBottom: 313}]}
                                onPress={() => setShowLogin(!showLogin)}
                            >
                                <Text style={loginStyles.buttonText}>Log in</Text>
                            </Pressable>
                        </View>
                    )
                }
            <Footer/>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    input: {
        width: 370,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: colors.white,
        backgroundColor: colors.white,
        color: colors.black,
        textAlign: 'center'
    },
    headerTitle: {
        padding: 40,
    },
    headerTitleText: {
        color: colors.white,
        fontSize: 30,
        textAlign: 'center'
    },
    subheaderTitle: {
        paddingTop: 15,
        paddingBottom: 40,
    },
    subheaderTitleText: {
        color: colors.white,
        fontSize: 23,
        textAlign: 'center'
    },
    loginContainer: {
        alignItems: 'center',
        flex: .3
    },
    button: {
        fontSize: 23,
        padding: 5,
        marginVertical: 8,
        margin: 40,
        backgroundColor: colors.brown,
        borderColor: colors.brown,
        borderWidth: 1,
        borderRadius: 30,
        width: 200,
    },
    buttonText: {
        color: colors.black,
        fontSize: 32,
        textAlign: 'center',
    }
});

export default LoginScreen;
