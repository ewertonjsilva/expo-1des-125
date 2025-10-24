import { useState } from 'react';
import { View } from 'react-native';

import Button from './button';
import Display from './display';

import styles from './styles';

export default function Exemplo7() {

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function addDigit(n) {

        const limpaTela = displayValue === '0' || clearDisplay;
        let currentValue = '';

        if (n === '.' && !limpaTela && displayValue.includes('.')) {
            return;
        }

        if (displayValue === '0' && n === '.') {
            currentValue = '0';
        } else {
            currentValue = limpaTela ? '' : displayValue;
        }


        const valorAtualizar = currentValue + n;

        if (n !== '.') {
            const novoValor = parseFloat(valorAtualizar);
            const atualizaValor = values;
            atualizaValor[current] = novoValor;
            setValues(atualizaValor);
        }

        setDisplayValue(valorAtualizar);
        setClearDisplay(false);

    }

    function clearMemory() {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    function definieOperacao(operacao) {
        if (current === 0) {
            setOperation(operacao);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            const sinalIgual = operacao === '=';
            if (!sinalIgual && clearDisplay) {
                setOperation(operacao);
            }

            const valores = values;

            // valores[0] = eval(valores[0] + operation + valores[1]);
            valores[0] = calculo(valores[0], valores[1], operation);
            valores[1] = 0;
            setDisplayValue(values[0].toString());
            // setOperation(sinalIgual ? 0 : 1);
            setClearDisplay(true);
            setValues(valores);
        }
    }

    function calculo(valor1, valor2, operacao) {
        if (operacao === '+') return parseFloat(valor1) + parseFloat(valor2);
        if (operacao === '-') return parseFloat(valor1) - parseFloat(valor2);
        if (operacao === '*') return parseFloat(valor1) * parseFloat(valor2);
        if (operacao === '/') return parseFloat(valor1) / parseFloat(valor2);
    }

    return (
        <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label='AC' triple onClick={() => clearMemory()} />
                <Button label='/' operation onClick={definieOperacao} />
                <Button label='7' onClick={addDigit} />
                <Button label='8' onClick={addDigit} />
                <Button label='9' onClick={addDigit} />
                <Button label='*' operation onClick={definieOperacao} />
                <Button label='4' onClick={addDigit} />
                <Button label='5' onClick={addDigit} />
                <Button label='6' onClick={addDigit} />
                <Button label='-' operation onClick={definieOperacao} />
                <Button label='1' onClick={addDigit} />
                <Button label='2' onClick={addDigit} />
                <Button label='3' onClick={addDigit} />
                <Button label='+' operation onClick={definieOperacao} />
                <Button label='0' double onClick={addDigit} />
                <Button label='.' onClick={addDigit} />
                <Button label='=' operation onClick={definieOperacao} />
            </View>
        </View>
    );
}