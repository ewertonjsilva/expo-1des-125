import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }

    function handleDecrementa() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.containerBotao}>
                <TouchableOpacity style={[styles.botao, styles.botaoMenor]} onPress={handleDecrementa}>
                    <Text style={styles.txtBotao}>-1</Text>
                </TouchableOpacity>
                <Text style={styles.valor}>{numero}</Text>
                <TouchableOpacity style={[styles.botao, styles.botaoMenor]} onPress={handleIncrementa}>
                    <Text style={styles.txtBotao}>+1</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo03;