import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [nomeCompleto, setNomeCompleto] = useState('Inserir nome e sobrenome');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    function handleExibeNomeCompleto() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome(''); 
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{nomeCompleto}</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput
                onChangeText={setNome}
                keyboardType='ascii-capable'
                value={nome}
                style={styles.input}
            />

            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
                onChangeText={setSobrenome}
                keyboardType='ascii-capable'
                value={sobrenome}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeNomeCompleto()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity>

        </View>
    );
}


