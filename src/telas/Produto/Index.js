import React from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet } from 'react-native';

import ProdutosCard from '../../componentes/produtosCard.js';

import produtos from '../../mocks/produto.js';

export default function Produtos() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>Nossos produtos</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <ProdutosCard nome={item.nome} imagem={item.imagem} preco={item.preco} />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    flatListContent: {
        padding: 16,
    },
    titulo: {
        textTransform: 'uppercase',
        fontSize: 22,
        marginTop: 16,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold"
    },
})
