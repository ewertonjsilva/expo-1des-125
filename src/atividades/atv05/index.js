import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import BotaoOperacao from './botao';
import Input from './input';

import styles from './styles';

export default function Atividade05() {

    const [n1, setN1] = useState(''); // Usar string vazia é melhor para inputs
    const [n2, setN2] = useState('');
    const [total, setTotal] = useState(null); // Usar null para indicar "nenhum resultado ainda"
    const [operacaoTxt, setOperacaoTxt] = useState('');

    // Função dedicada para limpar os estados
    const handleClear = () => {
        setN1('');
        setN2('');
        setTotal(null);
        setOperacaoTxt('');
    };

    // Lógica de cálculo refatorada
    const handleCalculate = (op) => {
        setOperacaoTxt(op);

        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        // Validação para evitar NaN (Not a Number)
        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, insira números válidos.');
            return;
        }

        let resultado = 0;
        switch (op) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case 'x':
                resultado = num1 * num2;
                break;
            case '/':
                // Tratamento de divisão por zero
                if (num2 === 0) {
                    alert('Não é possível dividir por zero!');
                    return;
                }
                resultado = num1 / num2;
                break;
            default:
                break;
        }
        setTotal(resultado);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <Input valor={n1} alteraValor={setN1} />

            <Text style={styles.txtSaida}>{operacaoTxt}</Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <Input valor={n2} alteraValor={setN2} />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <Input
                // Garante que o valor seja string, mesmo se for null
                valor={total !== null ? total.toFixed(2) : '0.00'}
                alteraValor={() => { }} // Função vazia, pois é somente leitura
                readOnly={true}
            />

            <View style={styles.containerBotoes}>
                <BotaoOperacao onPress={() => handleCalculate('+')}>+</BotaoOperacao>
                <BotaoOperacao onPress={() => handleCalculate('-')}>-</BotaoOperacao>
                <BotaoOperacao onPress={() => handleCalculate('x')}>x</BotaoOperacao>
                <BotaoOperacao onPress={() => handleCalculate('/')}>/</BotaoOperacao>
            </View>

            <BotaoOperacao onPress={handleClear} grande={true}>
                Zerar
            </BotaoOperacao>

        </View>
    );
}