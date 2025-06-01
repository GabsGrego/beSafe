import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import PerfilScreen from '../screens/PerfilScreen';
import GuiaEmergenciaScreen from '../screens/GuiaEmergenciaScreen';
import GruposVulneraveisScreen from '../screens/GruposVulneraveisScreen';
import SuporteEmocionalScreen from '../screens/SuporteEmocionalScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Perfil" component={PerfilScreen} options={{headerShown: false}}/>
            <Stack.Screen name="GuiaEmergencia" component={GuiaEmergenciaScreen} options={{headerShown: false}}/>
            <Stack.Screen name="GruposVulneraveis" component={GruposVulneraveisScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SuporteEmocional" component={SuporteEmocionalScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default AppNavigator;