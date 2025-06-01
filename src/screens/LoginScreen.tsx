import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        navigation.navigate('Home');
    } catch (error: any) {
        Alert.alert('Erro ao logar:', error.message);
    }
};
return (
    <View style={{ padding: 20 }}>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={{ borderBottomWidth: 1 }} />

        <Text>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry style={{ borderBottomWidth: 1 }} />

        <Button title="Entrar" onPress={login} />
        <Button title="Não tem conta? Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
    </View>
);
};

export default LoginScreen;
