import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { auth, db } from '../firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function PerfilScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const carregarDados = async () => {
    const ref = doc(db, 'usuarios', auth.currentUser.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
        const dados = snap.data();
        setNome(dados.nome);
        setEmail(dados.email);
    }
};

    const salvar = async () => {
    const ref = doc(db, 'usuarios', auth.currentUser.uid);
    await updateDoc(ref, { nome });
    Alert.alert('Dados atualizados com sucesso!');
};

    useEffect(() => {
    carregarDados();
}, []);

return (
    <View style={{ padding: 20 }}>
        <Text>Nome</Text>
        <TextInput value={nome} onChangeText={setNome} style={{ borderBottomWidth: 1 }} />

        <Text>Email (não editável)</Text>
        <TextInput value={email} editable={false} style={{ borderBottomWidth: 1, color: 'gray' }} />

        <Button title="Salvar alterações" onPress={salvar} />
    </View>
);
}
