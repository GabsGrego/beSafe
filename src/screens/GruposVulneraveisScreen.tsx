import { ScrollView, Text } from 'react-native';

export default function GruposVulneraveisScreen() {
return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Crianças:</Text>
        <Text>- Mantenha por perto, explique com calma o que está acontecendo.</Text>

        <Text style={{ fontSize: 20, marginTop: 10 }}>Idosos:</Text>
        <Text>- Ajude com mobilidade, garanta acesso a remédios e abrigo.</Text>

        <Text style={{ fontSize: 20, marginTop: 10 }}>Pessoas com deficiência:</Text>
        <Text>- Respeite necessidades específicas de locomoção, comunicação e segurança.</Text>

        <Text style={{ fontSize: 20, marginTop: 10 }}>Animais:</Text>
        <Text>- Leve em caixas de transporte, mantenha ração e água separadas.</Text>
    </ScrollView>
);
}
