import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('Valor inicial'); 
    const [mensagem, setMensagem] = useState(''); 

    function handleExibeMensagem() {
        setMensagem(txt2);
        setTxt2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='texto de fundo'
                keyboardType='ascii-capable'
                // editable={false}
                // multiline
                // numberOfLines={4}
                maxLength={7}
                // secureTextEntry 
                style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2} 
                onChangeText={setTxt2}
                placeholder='digite sua mensagem'
                keyboardType='ascii-capable'                
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity> 

        </View>
    );
}


