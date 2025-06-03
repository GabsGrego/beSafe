import React from 'react';
import { ScrollView, Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

interface VulnerableGroup {
    id: string;
    title: string;
    color: string;
    tips: string[];
}

const GruposVulneraveisScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const vulnerableGroups: VulnerableGroup[] = [
        {
            id: '1',
            title: 'Crianças',
            color: '#f59e0b',
            tips: [
                'Mantenha as crianças sempre por perto durante emergências',
                'Explique com calma e linguagem simples o que está acontecendo',
                'Tenha brinquedos ou objetos de conforto à mão',
                'Ensine números de emergência de forma lúdica',
                'Prepare um kit especial com fraldas, mamadeiras e medicamentos',
                'Identifique a criança com pulseira contendo dados dos responsáveis'
            ]
        },
        {
            id: '2',
            title: 'Idosos',
            color: '#8b5cf6',
            tips: [
                'Auxilie com mobilidade e locomoção para locais seguros',
                'Garanta acesso contínuo a medicamentos essenciais',
                'Providencie abrigo adequado com temperatura controlada',
                'Mantenha documentos médicos sempre acessíveis',
                'Verifique regularmente sinais vitais e bem-estar',
                'Tenha lista atualizada de medicações e dosagens'
            ]
        },
        {
            id: '3',
            title: 'Pessoas com Deficiência',
            color: '#06b6d4',
            tips: [
                'Respeite necessidades específicas de locomoção',
                'Adapte comunicação conforme tipo de deficiência',
                'Garanta acessibilidade em rotas de evacuação',
                'Mantenha equipamentos auxiliares funcionando',
                'Tenha plano personalizado de evacuação',
                'Considere necessidades de cuidadores ou acompanhantes'
            ]
        },
        {
            id: '4',
            title: 'Animais de Estimação',
            color: '#10b981',
            tips: [
                'Transporte em caixas adequadas e seguras',
                'Mantenha ração e água separadas para cada animal',
                'Tenha documentos veterinários atualizados',
                'Identifique com coleira contendo dados do dono',
                'Prepare kit com medicamentos específicos',
                'Localize abrigos que aceitem animais antecipadamente'
            ]
        }
    ];

    const generalTips = [
        'Sempre priorize a segurança humana em primeiro lugar;',
        'Tenha um plano de evacuação específico para cada grupo;',
        'Mantenha contatos de emergência sempre atualizados;',
        'Pratique simulados regularmente com todos os membros;'
    ];

    const renderVulnerableGroup = (group: VulnerableGroup) => (
        <View key={group.id} style={styles.groupCard}>
            <View style={[styles.groupHeader, { backgroundColor: group.color }]}>
                <View style={styles.groupTitleContainer}>
                    <Text style={styles.groupTitle}>{group.title}</Text>
                </View>
            </View>
            
            <View style={styles.groupContent}>
                <Text style={styles.tipsTitle}>Cuidados Especiais:</Text>
                {group.tips.map((tip, index) => (
                    <View key={index} style={styles.tipContainer}>
                        <View style={[styles.tipBullet, { backgroundColor: group.color }]} />
                        <Text style={styles.tipText}>{tip}</Text>
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
                    <Text style={styles.headerTitle}>Grupos Vulneráveis</Text>
                    <Text style={styles.headerSubtitle}>Cuidados especiais em emergências</Text>
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Card Informativo */}
                <View style={styles.infoCard}>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoTitle}>Cuidado e Proteção</Text>
                        <Text style={styles.infoText}>
                            Em situações de emergência, alguns grupos precisam de atenção especial. 
                            Siga estas orientações para garantir a segurança de todos.
                        </Text>
                    </View>
                </View>

                {/* Grupos Vulneráveis */}
                {vulnerableGroups.map(renderVulnerableGroup)}

                {/* Dicas Gerais */}
                <View style={styles.generalTipsCard}>
                    <Text style={styles.generalTipsTitle}>Dicas Gerais Importantes</Text>
                    {generalTips.map((tip, index) => (
                        <View key={index} style={styles.generalTipContainer}>
                            <Text style={styles.generalTipNumber}>{index + 1}</Text>
                            <Text style={styles.generalTipText}>{tip}</Text>
                        </View>
                    ))}
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
    infoCard: {
        backgroundColor: '#dbeafe',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        borderLeftWidth: 4,
        borderLeftColor: '#2563eb',
    },
    infoContent: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e40af',
        marginBottom: 4,
    },
    infoText: {
        fontSize: 14,
        color: '#1e3a8a',
        lineHeight: 20,
    },
    groupCard: {
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
    groupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    groupTitleContainer: {
        flex: 1,
    },
    groupTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 6,
    },
    priorityBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    priorityText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#ffffff',
    },
    groupContent: {
        padding: 16,
    },
    tipsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 12,
    },
    tipContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    tipBullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginTop: 8,
        marginRight: 12,
    },
    tipText: {
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 20,
        flex: 1,
    },
    generalTipsCard: {
        backgroundColor: '#f0fdf4',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#10b981',
    },
    generalTipsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#065f46',
        marginBottom: 15,
    },
    generalTipContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    generalTipNumber: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#10b981',
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 24,
        marginRight: 12,
    },
    generalTipText: {
        fontSize: 14,
        color: '#047857',
        lineHeight: 20,
        flex: 1,
    },
});

export default GruposVulneraveisScreen;

