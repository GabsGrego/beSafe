import { View, Text, Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const GuiaEmergencia = () => {navigation.navigate("GuiaEmergencia")};
    const GruposVulneraveis = () => {navigation.navigate("GruposVulneraveis")};
    const SuporteEmocional = () => {navigation.navigate("SuporteEmocional")};

    return (
    <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao Be Safe</Text>

        <Button title="Guias de Segurança" onPress={GuiaEmergencia} />
        <Button title="Ajuda a Grupos Vulneráveis" onPress={GruposVulneraveis} />
        <Button title="Suporte Emocional" onPress={SuporteEmocional} />
    </View>
);
};

export default HomeScreen;