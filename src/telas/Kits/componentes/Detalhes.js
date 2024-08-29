import React from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';

import Texto from '../../../componentes/Texto'; //Componente de Exibição de Texto
import Botao from '../../../componentes/Botao';
import logop from '../../../../assets/logoblack.png';

export default function Detalhes({ nome, detalhes, preco, botao }) {
    return (
        <View style={styles.container}>
            <View style={styles.produto}>
                <View style={styles.logo}>
                    <Image style={styles.logop} source={logop} resizeMode='contain' />
                    <Texto style={styles.nome}>{nome}</Texto>
                </View>
                <Texto style={styles.descricao}>{detalhes}</Texto>
                <Texto style={styles.preco}>{preco}</Texto>
                <Botao
                    textoBotao={botao}
                    acaoBotao={() => { Alert.alert("Em breve", "Estamos preparando uma novidade para você") }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Define o fundo preto para toda a tela
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    nome: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        margin: 8,
        fontWeight: 'bold'
    },
    descricao: {
        color: "gray",
        fontSize: 18,
        textAlign: "center"
    },
    logo: {
        flexDirection: 'row',
    },
    logop: {
        width: 50,
        height: 50,
    },
    preco: {
        fontSize: 22,
        color: 'white',
        width: '100%',
        textAlign: 'center'
    },
});
