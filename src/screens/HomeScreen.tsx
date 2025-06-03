import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');

interface ZoneRisk {
    id: string;
    zone: string;
    precipitation: number;
    riskLevel: 'Alta' | 'Média' | 'Baixa';
    riskColor: string;
}

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [currentTemp] = useState(23);
    const [weatherIcon] = useState('☁️'); 
    const [menuVisible, setMenuVisible] = useState(false);

    const zoneRisks: ZoneRisk[] = [
        { id: '1', zone: 'Norte', precipitation: 75, riskLevel: 'Alta', riskColor: '#ef4444' },
        { id: '2', zone: 'Sul', precipitation: 45, riskLevel: 'Média', riskColor: '#f59e0b' },
        { id: '3', zone: 'Leste', precipitation: 30, riskLevel: 'Baixa', riskColor: '#10b981' },
        { id: '4', zone: 'Oeste', precipitation: 60, riskLevel: 'Média', riskColor: '#f59e0b' },
        { id: '5', zone: 'Centro', precipitation: 20, riskLevel: 'Baixa', riskColor: '#10b981' },
    ];

    const GuiaEmergencia = () => { navigation.navigate("GuiaEmergencia") };
    const GruposVulneraveis = () => { navigation.navigate("GruposVulneraveis") };
    const SuporteEmocional = () => { navigation.navigate("SuporteEmocional") };

    const renderZoneRisk = ({ item }: { item: ZoneRisk }) => (
        <View style={styles.riskCard}>
            <Text style={styles.zoneName}>{item.zone}</Text>
            <View style={styles.riskInfo}>
                <Text style={styles.precipitationText}>{item.precipitation}%</Text>
                <Text style={styles.precipitationLabel}>Precipitação</Text>
            </View>
            <View style={[styles.riskBadge, { backgroundColor: item.riskColor }]}>
                <Text style={styles.riskText}>{item.riskLevel}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
            
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.appName}>Be Safe</Text>
                <TouchableOpacity 
                    style={styles.menuButton}
                    onPress={() => setMenuVisible(!menuVisible)}
                >
                    <Text style={styles.menuIcon}>☰</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {/* Informativo do Clima */}
                <View style={styles.weatherCard}>
                    <View style={styles.weatherHeader}>
                        <Text style={styles.weatherTitle}>Clima Atual - São Paulo</Text>
                    </View>
                    <View style={styles.weatherInfo}>
                        <View style={styles.temperatureSection}>
                            <Text style={styles.temperature}>{currentTemp}°</Text>
                            <Text style={styles.temperatureUnit}>Celsius</Text>
                        </View>
                        <View style={styles.weatherIconSection}>
                            <Text style={styles.weatherIcon}>{weatherIcon}</Text>
                            <Text style={styles.weatherDescription}>Nublado</Text>
                        </View>
                    </View>
                </View>

                {/* Carrossel de Risco de Enchente */}
                <View style={styles.riskSection}>
                    <Text style={styles.sectionTitle}>Risco de Enchente</Text>
                    <Text style={styles.sectionSubtitle}>Monitoramento por zona de São Paulo</Text>
                    
                    <FlatList
                        data={zoneRisks}
                        renderItem={renderZoneRisk}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.riskCarousel}
                        snapToInterval={width * 0.7 + 15}
                        decelerationRate="fast"
                    />
                </View>

                {/* Botões de Navegação */}
                <View style={styles.navigationSection}>
                    <TouchableOpacity style={styles.navButton} onPress={GuiaEmergencia}>
                        <View style={styles.navButtonIcon}>
                            <Text style={styles.navButtonEmoji}>📋</Text>
                        </View>
                        <Text style={styles.navButtonTitle}>Guias de Segurança</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navButton} onPress={GruposVulneraveis}>
                        <View style={styles.navButtonIcon}>
                            <Text style={styles.navButtonEmoji}>🤝</Text>
                        </View>
                        <Text style={styles.navButtonTitle}>Ajuda a Grupos Vulneráveis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navButton} onPress={SuporteEmocional}>
                        <View style={styles.navButtonIcon}>
                            <Text style={styles.navButtonEmoji}>💙</Text>
                        </View>
                        <Text style={styles.navButtonTitle}>Suporte Emocional</Text>
                    </TouchableOpacity>
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
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    menuButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    menuIcon: {
        fontSize: 24,
        color: '#ffffff',
    },
    content: {
        flex: 1,
        padding: 10,
    },
    weatherCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    weatherHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    weatherTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#1e293b',
    },
    weatherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    temperatureSection: {
        alignItems: 'flex-start',
    },
    temperature: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2563eb',
    },
    temperatureUnit: {
        fontSize: 16,
        color: '#64748b',
        marginTop: -8,
    },
    weatherIconSection: {
        alignItems: 'center',
    },
    weatherIcon: {
        fontSize: 64,        
    },
    weatherDescription: {
        fontSize: 16,
        color: '#64748b',
        fontWeight: '500',
    },
    riskSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 5,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#64748b',
        marginBottom: 20,
    },
    riskCarousel: {
        paddingLeft: 5,
    },
    riskCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginRight: 15,
        width: width * 0.6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    zoneName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 12,
    },
    riskInfo: {
        marginBottom: 12,
    },
    precipitationText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2563eb',
    },
    precipitationLabel: {
        fontSize: 14,
        color: '#64748b',
        marginTop: -4,
    },
    riskBadge: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    riskText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    navigationSection: {
        gap: 15,
    },
    navButton: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    navButtonIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#eff6ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    navButtonEmoji: {
        fontSize: 24,
    },
    navButtonTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1e293b',
        flex: 1,
    },
});

export default HomeScreen;