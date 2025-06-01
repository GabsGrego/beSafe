import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }: { navigation: any }) {

    return (
    <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao Be Safe</Text>

        <Button title="Guias de Segurança" onPress={() => navigation.navigate('GuiaEmergencia')} />
        <Button title="Ajuda a Grupos Vulneráveis" onPress={() => navigation.navigate('GruposVulneraveis')} />
        <Button title="Suporte Emocional" onPress={() => navigation.navigate('SuporteEmocional')} />
    </View>
);
}
