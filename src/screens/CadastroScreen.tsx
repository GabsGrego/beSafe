import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

export default function CadastroScreen({ navigation }: { navigation: any }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrar = async () => {
    try {
        const cred = await createUserWithEmailAndPassword(auth, email, senha);
        await setDoc(doc(db, 'usuarios', cred.user.uid), {
            nome,
            email
    });
        Alert.alert('Cadastro realizado com sucesso!');
        navigation.navigate('Login');
    } catch (error: any) {
        Alert.alert('Erro ao cadastrar:', error.message);
    }
};
return (
    <View style={{ padding: 20 }}>
        <Text>Nome</Text>
        <TextInput value={nome} onChangeText={setNome} style={{ borderBottomWidth: 1 }} />

        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={{ borderBottomWidth: 1 }} />

        <Text>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry style={{ borderBottomWidth: 1 }} />

        <Button title="Cadastrar" onPress={cadastrar} />
    </View>
);
}