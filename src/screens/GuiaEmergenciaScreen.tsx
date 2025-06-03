import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

interface GuideSection {
    id: string;
    title: string;
    items: string[];
    color: string;
}

const GuiaEmergenciaScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const guideSections: GuideSection[] = [
        {
            id: '1',
            title: 'Antes da Enchente',
            color: '#f59e0b',
            items: [
                'Mantenha documentos e itens essenciais em local seguro e elevado',
                'Tenha um kit de emergência com água, lanterna, pilhas e medicamentos',
                'Identifique rotas de evacuação e pontos de encontro',
                'Cadastre-se nos alertas de emergência da Defesa Civil',
                'Mantenha o celular sempre carregado',
                'Armazene água potável e alimentos não perecíveis'
            ]
        },
        {
            id: '2',
            title: 'Durante a Enchente',
            color: '#ef4444',
            items: [
                'Evite contato direto com a água da enchente',
                'Desligue energia elétrica e gás imediatamente',
                'Procure locais elevados e seguros',
                'Não tente atravessar áreas alagadas',
                'Mantenha-se informado pelos canais oficiais',
                'Ligue para emergência: 193 (Bombeiros) ou 199 (Defesa Civil)'
            ]
        },
        {
            id: '3',
            title: 'Depois da Enchente',
            color: '#10b981',
            items: [
                'Lave bem alimentos e roupas que tiveram contato com a água',
                'Higienize toda a casa com água sanitária diluída',
                'Descarte alimentos que podem ter sido contaminados',
                'Verifique a estrutura da casa antes de retornar',
                'Documente os danos para seguros e auxílios',
                'Procure atendimento médico se necessário'
            ]
        }
    ];

    const renderGuideSection = (section: GuideSection) => (
        <View key={section.id} style={styles.sectionCard}>
            <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            <View style={styles.sectionContent}>
                {section.items.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <View style={[styles.itemBullet, { backgroundColor: section.color }]} />
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                ))}
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
                    <Text style={styles.headerTitle}>Guias de Segurança</Text>
                    <Text style={styles.headerSubtitle}>Orientações para emergências</Text>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Alerta Importante */}
                <View style={styles.alertCard}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>Importante!</Text>
                        <Text style={styles.alertText}>
                            Em situações de emergência, mantenha a calma e siga as orientações das autoridades competentes.
                        </Text>
                    </View>
                </View>

                {/* Seções do Guia */}
                {guideSections.map(renderGuideSection)}

                {/* Dicas Extras */}
                <View style={styles.tipsCard}>
                    <Text style={styles.tipsTitle}>Dicas Extras</Text>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipText}>
                            • Mantenha sempre um kit de emergência atualizado em casa
                        </Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipText}>
                            • Conheça os pontos de alagamento da sua região
                        </Text>
                    </View>
                    <View style={styles.tipItem}>
                        <Text style={styles.tipText}>
                            • Tenha sempre uma rota alternativa planejada
                        </Text>
                    </View>
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
        padding: 10,
    },
    alertCard: {
        backgroundColor: '#fef3c7',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#f59e0b',
    },
    alertContent: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#92400e',
        marginBottom: 4,
    },
    alertText: {
        fontSize: 12,
        color: '#78350f',
        lineHeight: 20,
    },
    sectionCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    sectionIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        flex: 1,
    },
    sectionContent: {
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    itemBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginTop: 8,
        marginRight: 12,
    },
    itemText: {
        fontSize: 15,
        color: '#374151',
        lineHeight: 22,
        flex: 1,
    },
    emergencySection: {
        marginTop: 10,
        marginBottom: 25,
    },
    emergencyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 5,
    },
    emergencySubtitle: {
        fontSize: 14,
        color: '#64748b',
        marginBottom: 20,
    },
    contactsGrid: {
        gap: 12,
    },
    contactCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    contactIcon: {
        fontSize: 32,
        marginRight: 16,
    },
    contactInfo: {
        flex: 1,
    },
    contactName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 2,
    },
    contactNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563eb',
    },
    callButton: {
        backgroundColor: '#2563eb',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    callButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    tipsCard: {
        backgroundColor: '#eff6ff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#2563eb',
    },
    tipsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 15,
    },
    tipItem: {
        marginBottom: 8,
    },
    tipText: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
    },
});

export default GuiaEmergenciaScreen;