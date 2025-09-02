import { View, Text } from 'react-native'; 

import styles from './styles';

import camisaBranca from '../../../assets/camisaBranca.png'; 
import camisaPreta from '../../../assets/camisaPreta.png'; 
import camisaBordo from '../../../assets/camisaBordo.png'; 
import camisaListrada from '../../../assets/camisaListrada.png'; 

import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>            

            <Card 
                titulo={'Camiseta nº 1'} 
                descricao={'Camisa de jogo titular'} 
                valor={'350,00'}
                img={camisaBranca}
            />
            <Card 
                titulo={'Camiseta nº 2'} 
                descricao={'Camisa de jogo como visitante'} 
                valor={'350,00'}
                img={camisaPreta}
            />
            <Card 
                titulo={'Camiseta 2012'} 
                descricao={'Camisa do São Jorge'} 
                valor={'350,00'}
                img={camisaBordo}
            />
            <Card 
                titulo={'Camiseta listrada clássica'} 
                descricao={'Camisa de jogo de antigamente com listras, muito utilizada pela torcida'} 
                valor={'350,00'}
                img={camisaListrada}
            />

        </View>
    );
}

export default Atividade02;