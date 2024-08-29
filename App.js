// ./App.js

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Raleway_300Light, Raleway_700Bold } from '@expo-google-fonts/raleway';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Kit from './src/telas/Kits/Index.js';
import Produto from './src/telas/Produto/Index.js';
import Sobre from './src/telas/Sobre';
import Perfil from './src/telas/Perfil/Perfil.js'; // Atualizado para Perfil.js
import mock from './src/mocks/kit.js';
import mock_sobre from './src/mocks/sobre';
import mock_produto from './src/mocks/produto.js'; // Importar o mock da tela de Produtos
import mock_perfil from './src/mocks/perfil.js'; // Importar o mock da tela de Perfil

function MenuKit() {
    return <Kit {...mock} />;
}

function MenuSobre() {
    return <Sobre {...mock_sobre} />;
}

function MenuProduto() {
    return <Produto {...mock_produto} />; // Passar o mock para a tela de Produtos
}

function MenuPerfil() {
    return <Perfil usuario={mock_perfil.usuario} />; // Passar o mock para a tela de Perfil
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Kit") {
                        iconName = focused
                            ? 'basket'
                            : 'basket-outline';
                    } else if (route.name === "Sobre nós") {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === "Produtos") {
                        iconName = focused
                            ? 'list'
                            : 'list-outline';
                    } else if (route.name === "Lista de Desejos") {
                        iconName = focused
                            ? 'heart'
                            : 'heart-outline';
                    } else if (route.name === "Perfil") {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#01426c',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,
                headerShown: false,
            })}
        >
            <Tab.Screen name='Sobre nós' component={MenuSobre} />
            <Tab.Screen name='Kit' component={MenuKit} />
            <Tab.Screen name='Produtos' component={MenuProduto} />
            <Tab.Screen name='Lista de Desejos' component={MenuKit} />
            <Tab.Screen name='Perfil' component={MenuPerfil} /> {/* Tela de Perfil */}
        </Tab.Navigator>
    );
}

export default function App() {
    // Carrega a fonte para o projeto
    const [fonteCarregada] = useFonts({
        "ralewayP": Raleway_300Light,
        "ralewayG": Raleway_700Bold,
    });

    // Checa se as fontes já foram carregadas
    if (!fonteCarregada) {
        return <View />;
    }

    return (
        <NavigationContainer>
            <TabsMenu />
        </NavigationContainer>
    );
}
