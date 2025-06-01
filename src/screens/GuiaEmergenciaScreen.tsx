import { View, ScrollView, Text } from 'react-native';
//import { NavigationProp, useNavigation } from '@react-navigation/native';
//import { RootStackParamList } from '../navigation/types';

const GuiaEmergenciaScreen: React.FC = () => {
    //const navigation = useNavigation<NavigationProp<RootStackParamList>>();

return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Antes da enchente:</Text>
        <Text>- Mantenha documentos e itens essenciais em local seguro.</Text>
        <Text>- Tenha um kit de emergência com água, lanterna, pilhas, etc.</Text>

        <Text style={{ fontSize: 20, marginVertical: 10 }}>Durante a enchente:</Text>
        <Text>- Evite contato com a água da enchente.</Text>
        <Text>- Desligue energia elétrica e gás.</Text>

        <Text style={{ fontSize: 20, marginVertical: 10 }}>Depois da enchente:</Text>
        <Text>- Lave bem alimentos e roupas atingidas.</Text>
        <Text>- Higienize a casa com água sanitária.</Text>
    </ScrollView>
);
};

export default GuiaEmergenciaScreen;
