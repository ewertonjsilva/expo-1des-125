import { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import BotaoOperacao from './botao';

import styles from './styles';

export default function Atividade05() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    const [operacaoTxt, setOperacaoTxt] = useState('');

    function operacao(op) {

        if (op == '+') {
            setTotal(parseFloat(n1) + parseFloat(n2));
        }

        if (op == '-') {
            setTotal(parseFloat(n1) - parseFloat(n2));
        }

        if (op == 'x') {
            setTotal(parseFloat(n1) * parseFloat(n2));
        }

        if (op == '/') {
            setTotal(parseFloat(n1) / parseFloat(n2));
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                        isFocusN1 ? styles.txtEntradaUsando : {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)}
                onChangeText={(num1) => setN1(num1)}
                value={n1.toString()}
            // keyboardType='numeric'

            />

            <Text style={styles.txtSaida}>{operacaoTxt}</Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada, isFocusN2 ? styles.txtEntradaUsando : {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)}
                onChangeText={(num2) => setN2(num2)}
                value={n2.toString()}
            />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput
                style={
                    [
                        styles.txtEntrada,
                        styles.txtTotal,
                        isFocusTotal ?
                            {
                                borderColor: 'deepskyblue',
                                outline: 'none',
                            }
                            :
                            {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)}
                readOnly={true}
                value={total ? parseFloat(total).toFixed(2) : '0.00'}
            />

            <View style={styles.containerBotoes}>
                <BotaoOperacao onPress={() => operacao('+')} mudaOperacao={() => setOperacaoTxt('+')} >+</BotaoOperacao>
                <BotaoOperacao onPress={() => operacao('-')} mudaOperacao={() => setOperacaoTxt('-')} >-</BotaoOperacao>
                <BotaoOperacao onPress={() => operacao('x')} mudaOperacao={() => setOperacaoTxt('x')} >x</BotaoOperacao>
                <BotaoOperacao onPress={() => operacao('/')} mudaOperacao={() => setOperacaoTxt('/')} >/</BotaoOperacao>
            </View>

        </View>
    );
}