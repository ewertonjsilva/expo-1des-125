import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <Text style={styles.cabelo}>//////////////////////////</Text>
            <Text style={styles.cabelo}>//////////////////////////</Text>
            <View style={styles.containerAtividade}>
                <View style={styles.containerHorizontal}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => setNumero(numero - 1)}
                    >
                        <Text style={styles.txtBotao}>-</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => setNumero(numero + 1)}
                    >
                        <Text style={styles.txtBotao}>+</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.texto}>{numero}</Text>

                <TouchableOpacity
                    style={[styles.botao, styles.botaoZerar]}
                    onPress={() => setNumero(0)}
                >
                    <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Atividade03;