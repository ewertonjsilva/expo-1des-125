import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import amarela from '../../../assets/brasilAmarela.png'; 
import azul from '../../../assets/brasilAzul.jpg'; 
import branca from '../../../assets/brasilBranco.png'; 
import preta from '../../../assets/brasilPreta.jpg'; 

import Card from './card';

function Revisao02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Card 
                nome={'Camisa Amarela'} 
                decricao={'Camiseta nº 1 do time, usada em jogos como mandante'} 
                valor={'R$ 450,00'} 
                imagem={amarela} 
            />

            <Card 
                nome={'Camisa Azul'} 
                decricao={'Camiseta nº 2 do time, usada em jogos como visitante'} 
                valor={'R$ 420,00'} 
                imagem={azul} 
            />

            <Card 
                nome={'Camisa Azul'} 
                decricao={'Camiseta nº 2 do time, usada em jogos como visitante'} 
                valor={'R$ 420,00'} 
                imagem={branca} 
            />

            <Card 
                nome={'Camisa Azul'} 
                decricao={'Camiseta nº 2 do time, usada em jogos como visitante'} 
                valor={'R$ 420,00'} 
                imagem={preta} 
            />

        </View>
    );
}

export default Revisao02;