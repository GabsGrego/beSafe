import { View, Text, Linking, TouchableOpacity } from 'react-native';

export default function SuporteEmocionalScreen() {
return (
    <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Contatos de Apoio Emocional</Text>

        <TouchableOpacity onPress={() => Linking.openURL('tel:188')}>
            <Text style={{ fontSize: 18 }}>📞 CVV – 188</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, marginTop: 10 }}>🧠 CAPS Local: Rua Exemplo, 123</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>🏥 Defesa Civil: 199</Text>
    </View>
);
}
