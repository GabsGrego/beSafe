import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { RootStackParamList } from '../navigation/types';

const CadastroScreen: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
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
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Cadastro</Text>
            
            <Text>Nome</Text>
            <TextInput 
                value={nome} 
                onChangeText={setNome} 
                style={{ borderBottomWidth: 1, marginBottom: 15, padding: 10 }} 
                placeholder="Digite seu nome"
            />

            <Text>Email</Text>
            <TextInput 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address" 
                style={{ borderBottomWidth: 1, marginBottom: 15, padding: 10 }}
                placeholder="Digite seu email"
                autoCapitalize="none"
            />

            <Text>Senha</Text>
            <TextInput 
                value={senha} 
                onChangeText={setSenha} 
                secureTextEntry 
                style={{ borderBottomWidth: 1, marginBottom: 20, padding: 10 }}
                placeholder="Digite sua senha (mín. 6 caracteres)"
            />

            <Button title="Cadastrar" onPress={cadastrar} />
        </View>
    );
};

export default CadastroScreen;