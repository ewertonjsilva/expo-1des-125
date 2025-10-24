import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [mensImc, setMensImc] = useState('');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function handleExecutaCalculo() {
            const imc = calculaImc();
            exibeMensagemImc(imc);
    }

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        return tmpImc;
    }

    function exibeMensagemImc(imc) {
        let mensagem = ''; 
        setImc(imc);

        if (imc < 18.5) {
            mensagem = 'Abaixo do peso';
        }

        if (imc >= 18.5 && imc < 25) {
            mensagem = 'Peso normal';
        }

        if (imc >= 25 && imc < 30) {
            mensagem = 'Sobrepeso';
        }

        if (imc >= 30 && imc < 35) {
            mensagem = 'Obsedidade grau I';
        }

        if (imc >= 35 && imc < 40) {
            mensagem = 'Obsedidade grau II';
        }
        
        if (imc >= 40) {
            mensagem = 'Obsedidade grau III';
        }

        setMensImc(mensagem);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensImc}</Text>

            <Botao calcular={handleExecutaCalculo}>Calcular</Botao>
        </View>
    )
}