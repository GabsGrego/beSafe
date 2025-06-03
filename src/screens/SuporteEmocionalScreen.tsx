import React from 'react';
import { View, Text, Linking, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

interface SupportContact {
    id: string;
    name: string;
    phone: string;
    description: string;
    color: string;
    available: string;
}

interface EmotionalTip {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const SuporteEmocionalScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const supportContacts: SupportContact[] = [
        {
            id: '1',
            name: 'CVV - Centro de Valorização da Vida',
            phone: '188',
            description: 'Prevenção do suicídio - Atendimento 24h gratuito',
            color: '#10b981',
            available: '24 horas'
        },
        {
            id: '2',
            name: 'CAPS - Centro de Atenção Psicossocial',
            phone: 'Local',
            description: 'Atendimento em saúde mental na sua região',
            color: '#2563eb',
            available: 'Horário comercial'
        },
        {
            id: '3',
            name: 'Defesa Civil',
            phone: '199',
            description: 'Apoio em situações de emergência e desastres',
            color: '#f59e0b',
            available: '24 horas'
        },
        {
            id: '4',
            name: 'SAMU - Emergências Médicas',
            phone: '192',
            description: 'Atendimento médico de urgência',
            color: '#ef4444',
            available: '24 horas'
        }
    ];

    const emotionalTips: EmotionalTip[] = [
        {
            id: '1',
            title: 'Respire Profundamente',
            description: 'Faça respirações lentas e profundas para acalmar a ansiedade',
            icon: '🫁'
        },
        {
            id: '2',
            title: 'Fale com Alguém',
            description: 'Compartilhe seus sentimentos com pessoas de confiança',
            icon: '💬'
        },
        {
            id: '3',
            title: 'Mantenha Rotina',
            description: 'Tente manter atividades regulares para estabilidade emocional',
            icon: '📅'
        },
        {
            id: '4',
            title: 'Cuide do Corpo',
            description: 'Alimente-se bem, hidrate-se e descanse adequadamente',
            icon: '💪'
        }
    ];

    const handlePhoneCall = (phone: string, name: string) => {
        if (phone === 'Local') {
            Alert.alert(
                'CAPS Local',
                'Procure o Centro de Atenção Psicossocial mais próximo da sua região. Você pode encontrar o endereço no site da prefeitura ou ligando para a Secretaria de Saúde.',
                [{ text: 'OK' }]
            );
            return;
        }

        Alert.alert(
            `Ligar para ${name}`,
            `Deseja ligar para ${phone}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { 
                    text: 'Ligar', 
                    onPress: () => Linking.openURL(`tel:${phone}`)
                }
            ]
        );
    };

    const renderSupportContact = (contact: SupportContact) => (
        <TouchableOpacity 
            key={contact.id} 
            style={styles.contactCard}
            onPress={() => handlePhoneCall(contact.phone, contact.name)}
        >            
            <View style={styles.contactDetails}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactDescription}>{contact.description}</Text>
                <View style={styles.contactMeta}>
                    <Text style={[styles.contactPhone, { color: contact.color }]}>
                        {contact.phone}
                    </Text>
                    <Text style={styles.contactAvailable}>• {contact.available}</Text>
                </View>
            </View>

            <View style={[styles.callButton, { backgroundColor: contact.color }]}>
                <Text style={styles.callButtonText}>
                    {contact.phone === 'Local' ? 'Info' : 'Ligar'}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderEmotionalTip = (tip: EmotionalTip) => (
        <View key={tip.id} style={styles.tipCard}>
            <Text style={styles.tipIcon}>{tip.icon}</Text>
            <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Suporte Emocional</Text>
                    <Text style={styles.headerSubtitle}>Cuidando da sua saúde mental</Text>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Card de Boas-vindas */}
                <View style={styles.welcomeCard}>
                    <View style={styles.welcomeContent}>
                        <Text style={styles.welcomeTitle}>Você não está sozinho</Text>
                        <Text style={styles.welcomeText}>
                            Em momentos difíceis, é importante buscar ajuda. Aqui você encontra 
                            contatos e dicas para cuidar da sua saúde mental.
                        </Text>
                    </View>
                </View>

                {/* Contatos de Apoio */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>📞 Contatos de Apoio</Text>
                    <Text style={styles.sectionSubtitle}>
                        Profissionais prontos para ajudar você
                    </Text>
                    
                    {supportContacts.map(renderSupportContact)}
                </View>

                {/* Dicas de Bem-estar */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dicas de Bem-estar</Text>
                    <Text style={styles.sectionSubtitle}>
                        Pequenas ações que podem fazer a diferença
                    </Text>
                    
                    <View style={styles.tipsGrid}>
                        {emotionalTips.map(renderEmotionalTip)}
                    </View>
                </View>

                {/* Sinais de Alerta */}
                <View style={styles.alertSection}>
                    <Text style={styles.alertTitle}>Quando Buscar Ajuda Imediata</Text>
                    <View style={styles.alertItem}>
                        <Text style={styles.alertBullet}>•</Text>
                        <Text style={styles.alertText}>Pensamentos de autolesão ou suicídio</Text>
                    </View>
                    <View style={styles.alertItem}>
                        <Text style={styles.alertBullet}>•</Text>
                        <Text style={styles.alertText}>Ansiedade ou pânico intensos</Text>
                    </View>
                    <View style={styles.alertItem}>
                        <Text style={styles.alertBullet}>•</Text>
                        <Text style={styles.alertText}>Isolamento social prolongado</Text>
                    </View>
                    <View style={styles.alertItem}>
                        <Text style={styles.alertBullet}>•</Text>
                        <Text style={styles.alertText}>Mudanças drásticas de comportamento</Text>
                    </View>
                </View>

                {/* Recursos Adicionais */}
                <View style={styles.resourcesCard}>
                    <Text style={styles.resourcesTitle}>Recursos Adicionais</Text>
                    
                    <TouchableOpacity style={styles.resourceItem}>
                        <View style={styles.resourceContent}>
                            <Text style={styles.resourceName}>Site do CVV</Text>
                            <Text style={styles.resourceDescription}>cvv.org.br - Chat online disponível</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resourceItem}>
                        <View style={styles.resourceContent}>
                            <Text style={styles.resourceName}>Apps de Meditação</Text>
                            <Text style={styles.resourceDescription}>Headspace, Calm, Zen - Para relaxamento</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.resourceItem}>
                        <View style={styles.resourceContent}>
                            <Text style={styles.resourceName}>Cartilha de Saúde Mental</Text>
                            <Text style={styles.resourceDescription}>Ministério da Saúde - Guias gratuitos</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Mensagem de Encorajamento */}
                <View style={styles.encouragementCard}>
                    <Text style={styles.encouragementIcon}>💙</Text>
                    <Text style={styles.encouragementText}>
                        "Cuidar da saúde mental é um ato de coragem e amor próprio. 
                        Cada passo em direção ao bem-estar é uma vitória."
                    </Text>
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
        paddingBottom: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
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
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#e2e8f0',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    welcomeCard: {
        backgroundColor: '#ecfdf5',
        borderRadius: 12,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        borderLeftWidth: 4,
        borderLeftColor: '#10b981',
    },
    welcomeContent: {
        flex: 1,
    },
    welcomeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#065f46',
        marginBottom: 6,
    },
    welcomeText: {
        fontSize: 14,
        color: '#047857',
        lineHeight: 20,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 5,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#64748b',
        marginBottom: 20,
    },
    contactCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    contactDetails: {
        flex: 1,
    },
    contactName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 4,
    },
    contactDescription: {
        fontSize: 13,
        color: '#64748b',
        marginBottom: 6,
        lineHeight: 18,
    },
    contactMeta: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactPhone: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8,
    },
    contactAvailable: {
        fontSize: 12,
        color: '#94a3b8',
    },
    callButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    callButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    tipsGrid: {
        gap: 12,
    },
    tipCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tipIcon: {
        fontSize: 28,
        marginRight: 16,
    },
    tipContent: {
        flex: 1,
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 4,
    },
    tipDescription: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 18,
    },
    alertSection: {
        backgroundColor: '#fef2f2',
        borderRadius: 12,
        padding: 20,
        marginBottom: 25,
        borderLeftWidth: 4,
        borderLeftColor: '#ef4444',
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#991b1b',
        marginBottom: 15,
    },
    alertItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    alertBullet: {
        fontSize: 16,
        color: '#dc2626',
        marginRight: 8,
        marginTop: 2,
    },
    alertText: {
        fontSize: 14,
        color: '#7f1d1d',
        lineHeight: 20,
        flex: 1,
    },
    resourcesCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    resourcesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 15,
    },
    resourceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
    },
    resourceContent: {
        flex: 1,
    },
    resourceName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 2,
    },
    resourceDescription: {
        fontSize: 13,
        color: '#64748b',
    },
    encouragementCard: {
        backgroundColor: '#eff6ff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        borderLeftWidth: 4,
        borderLeftColor: '#2563eb',
    },
    encouragementIcon: {
        fontSize: 32,
        marginBottom: 12,
    },
    encouragementText: {
        fontSize: 15,
        color: '#1e40af',
        textAlign: 'center',
        lineHeight: 22,
        fontStyle: 'italic',
    },
});

export default SuporteEmocionalScreen;