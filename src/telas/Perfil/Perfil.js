// ./src/telas/Perfil/Perfil.js

import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import musica from '../../assets/audio/musica.mp3'; // Substitua com o caminho real do arquivo de áudio

export default function Perfil({ usuario }) {
    const [sound, setSound] = React.useState(null);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            musica
        );
        setSound(sound);
        await sound.playAsync();
    };

    return (
        <View style={styles.container}>
            {usuario.foto && <Image source={usuario.foto} style={styles.foto} />}
            <Text style={styles.nome}>{usuario.nome}</Text>
            <Text style={styles.email}>{usuario.email}</Text>
            <Text style={styles.idade}>Idade: {usuario.idade}</Text>
            <Text style={styles.bio}>{usuario.bio}</Text>
            <Button title="Tocar Música" onPress={playSound} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 18,
        color: 'gray',
    },
    idade: {
        fontSize: 18,
        marginVertical: 10,
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
});
