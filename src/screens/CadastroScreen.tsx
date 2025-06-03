import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { RootStackParamList } from '../navigation/types';

const CadastroScreen: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    const cadastrar = async () => {
        // Validações básicas
        if (!nome.trim()) {
            Alert.alert('Erro', 'Por favor, digite seu nome');
            return;
        }
        
        if (!email.trim()) {
            Alert.alert('Erro', 'Por favor, digite seu email');
            return;
        }
        
        if (!senha || senha.length < 6) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
            return;
        }

        if (senha !== confirmSenha) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        try {
            console.log('Tentando cadastrar:', { email, senha: senha.length + ' caracteres' });
            
            const cred = await createUserWithEmailAndPassword(auth, email, senha);
            
            console.log('Usuário criado:', cred.user.uid);
            
            await setDoc(doc(db, 'usuarios', cred.user.uid), {
                nome,
                email
            });
            
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
            navigation.navigate('Login');
        } catch (error: any) {
            console.error('Erro completo:', error);
            
            // Tratamento de erros específicos do Firebase
            let mensagemErro = 'Erro desconhecido';
            
            switch (error.code) {
                case 'auth/email-already-in-use':
                    mensagemErro = 'Este email já está em uso';
                    break;
                case 'auth/invalid-email':
                    mensagemErro = 'Email inválido';
                    break;
                case 'auth/weak-password':
                    mensagemErro = 'Senha muito fraca';
                    break;
                case 'auth/operation-not-allowed':
                    mensagemErro = 'Operação não permitida. Verifique as configurações do Firebase';
                    break;
                default:
                    mensagemErro = error.message || 'Erro ao cadastrar usuário';
            }
            
            Alert.alert('Erro ao cadastrar', mensagemErro);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
            
            {/* Header com nome do app */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Text style={styles.appName}>Be Safe</Text>
                    <Text style={styles.subtitle}>Crie sua conta</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* Formulário */}
                <View style={styles.formContainer}>
                    <Text style={styles.welcomeText}>Junte-se a nós!</Text>
                    <Text style={styles.descriptionText}>
                        Crie sua conta e tenha acesso a todas as ferramentas de segurança
                    </Text>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput 
                            value={nome} 
                            onChangeText={setNome} 
                            style={styles.input}
                            placeholder="Digite seu nome completo"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

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
                            placeholder="Mínimo 6 caracteres"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmar Senha</Text>
                        <TextInput 
                            value={confirmSenha} 
                            onChangeText={setConfirmSenha} 
                            secureTextEntry 
                            style={styles.input}
                            placeholder="Digite a senha novamente"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    <TouchableOpacity style={styles.registerButton} onPress={cadastrar}>
                        <Text style={styles.registerButtonText}>Criar Conta</Text>
                    </TouchableOpacity>

                    <View style={styles.loginSection}>
                        <Text style={styles.loginText}>Já tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginLink}>Faça login</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
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
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
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
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    backButtonText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
        marginRight: 55,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#e2e8f0',
    },
    scrollContainer: {
        flex: 1,
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 30,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 22,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
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
    registerButton: {
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
    registerButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    loginSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        gap: 5,
    },
    loginText: {
        fontSize: 16,
        color: '#64748b',
    },
    loginLink: {
        fontSize: 16,
        color: '#2563eb',
        fontWeight: '600',
    },
});

export default CadastroScreen;