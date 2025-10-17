import { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function Input({ valor, alteraValor, readOnly = false }) { // Valor padrão para readOnly
    const [isFocus, setIsFocus] = useState(false);

    return (
        <TextInput
            style={[
                styles.txtEntrada,
                isFocus && styles.txtEntradaUsando // Estilo de foco condicional
            ]}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChangeText={alteraValor}
            value={String(valor ?? '')} // Garante que o valor é sempre string e evita erro com null/undefined
            keyboardType='numeric'
            editable={!readOnly} // 'editable' é mais apropriado que 'readOnly' para inputs
        />
    );
}