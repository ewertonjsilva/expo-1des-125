import { useState } from 'react';
import { View } from 'react-native';

import Button from './button';
import Display from './display';

import styles from './styles';

export default function Atividade7() {

    // otimização de código sugerida por IA -- Poderia revisar o código e sugerir melhorias:

    const [displayValue, setDisplayValue] = useState('0');
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operation, setOperation] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);

    function addDigit(digit) {
        if (digit === '.' && displayValue.includes('.') && !clearDisplay) return;

        const shouldClear = displayValue === '0' || clearDisplay;
        const currentValue = shouldClear ? (digit === '.' ? '0' : '') : displayValue;
        const updatedDisplay = currentValue + digit;

        setDisplayValue(updatedDisplay);
        setClearDisplay(false);

        if (digit !== '.') {
            const newValue = parseFloat(updatedDisplay);
            setValues(prevValues => {
                const updatedValues = [...prevValues];
                updatedValues[current] = newValue;
                return updatedValues;
            });
        }
    }

    function clearMemory() {
        setDisplayValue('0');
        setClearDisplay(false);
        setOperation(null);
        setValues([0, 0]);
        setCurrent(0);
    }

    function defineOperation(nextOperation) {
        if (current === 0) {
            setOperation(nextOperation);
            setCurrent(1);
            setClearDisplay(true);
        } else {
            if (!clearDisplay) {
                const result = calculate(values[0], values[1], operation);
                const updatedValues = [result, 0];
                setDisplayValue(result.toString());
                setValues(updatedValues);
            }

            setOperation(nextOperation !== '=' ? nextOperation : null);
            setCurrent(nextOperation === '=' ? 0 : 1);
            setClearDisplay(true);
        }
    }

    function calculate(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : 0; // proteção contra divisão por zero
            default: return a;
        }
    }

    return (
        <View style={styles.container}>
            <Display value={displayValue} />
            <View style={styles.buttons}>
                <Button label='AC' triple onClick={() => clearMemory()} />
                <Button label='/' operation onClick={defineOperation} />
                <Button label='7' onClick={addDigit} />
                <Button label='8' onClick={addDigit} />
                <Button label='9' onClick={addDigit} />
                <Button label='*' operation onClick={defineOperation} />
                <Button label='4' onClick={addDigit} />
                <Button label='5' onClick={addDigit} />
                <Button label='6' onClick={addDigit} />
                <Button label='-' operation onClick={defineOperation} />
                <Button label='1' onClick={addDigit} />
                <Button label='2' onClick={addDigit} />
                <Button label='3' onClick={addDigit} />
                <Button label='+' operation onClick={defineOperation} />
                <Button label='0' double onClick={addDigit} />
                <Button label='.' onClick={addDigit} />
                <Button label='=' operation onClick={defineOperation} />
            </View>
        </View>
    );
}