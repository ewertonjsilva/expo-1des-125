import { useState } from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Revisao03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero + 1);
        // console.log(numero);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Button
                onPress={() => {alert('Alguém tocou no botão!')}}
                title="Alerta"
                color="#777"
                accessibilityLabel="Botão de alerta"
            />

            <Text style={styles.txt}>{numero}</Text> 

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleIncrementar()}
            >
                <Text style={styles.txtBotao}>Incrementar número</Text>
            </TouchableOpacity>
        </View>
    );
}

