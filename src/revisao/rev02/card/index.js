import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card({ nome, decricao, valor, imagem }) {

    return (
        <View style={styles.container}>
            <View style={styles.containerImagem}>
                <Image source={imagem} style={styles.imagem} />
            </View>
            
            <View style={styles.containerDados}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.mensagem}>{decricao}</Text>
                <Text style={styles.titulo}>{valor}</Text>
            </View>
        </View>
    );
}

export default Card;