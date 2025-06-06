import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import Toast from 'react-native-toast-message';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        Toast.show({
            type: 'success',
            text1: 'Login realizado com sucesso!',
            text2: 'Bem-vindo ao Be Safe',
            position: 'bottom',
            visibilityTime: 3000,
        });
        navigation.navigate('Home');
    } catch (error: any) {
        let mensagemErro = 'Erro desconhecido';

            switch (error.code) {
                case 'auth/user-not-found':
                    mensagemErro = 'Usuário não encontrado';
                    break;
                case 'auth/wrong-password':
                    mensagemErro = 'Senha incorreta';
                    break;
                case 'auth/invalid-email':
                    mensagemErro = 'Email inválido';
                    break;
                case 'auth/user-disabled':
                    mensagemErro = 'Usuário desabilitado';
                    break;
                case 'auth/too-many-requests':
                    mensagemErro = 'Muitas tentativas. Tente novamente mais tarde';
                    break;
                case 'auth/network-request-failed':
                    mensagemErro = 'Erro de conexão. Verifique sua internet';
                    break;
                default:
                    mensagemErro = error.message;
            }

            Toast.show({
                type: 'error',
                text1: 'Erro ao fazer login',
                text2: mensagemErro,
                position: 'bottom',
                visibilityTime: 4000,
            });
        }
    };


return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
            
            {/* Header com nome do app */}
            <View style={styles.header}>
                <Text style={styles.appName}>Be Safe</Text>
                <Text style={styles.subtitle}>Sua segurança em primeiro lugar</Text>
            </View>

            {/* Formulário */}
            <View style={styles.formContainer}>
                <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        value={email} 
                        onChangeText={setEmail} 
                        keyboardType="email-address"
                        style={styles.input}
                        placeholder="Digite seu email"
                        placeholderTextColor="#94a3b8"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        value={senha} 
                        onChangeText={setSenha} 
                        secureTextEntry 
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#94a3b8"
                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={login}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.registerButton} 
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.registerButtonText}>
                        Não tem conta? <Text style={styles.registerButtonTextBold}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        backgroundColor: '#1e3a8a',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#e2e8f0',
        textAlign: 'center',
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#e2e8f0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1e293b',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    loginButton: {
        backgroundColor: '#2563eb',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#2563eb',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    registerButton: {
        marginTop: 20,
        paddingVertical: 12,
        alignItems: 'center',
    },
    registerButtonText: {
        fontSize: 16,
        color: '#64748b',
    },
    registerButtonTextBold: {
        fontWeight: '600',
        color: '#2563eb',
    },
});

export default LoginScreen;
