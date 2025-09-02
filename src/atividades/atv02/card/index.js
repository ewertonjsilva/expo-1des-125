import { View, Text, Image } from 'react-native';

import styles from './styles';

function Card({ titulo, descricao, valor, img }) {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.imagem} />
            <View style={styles.containerTexto}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
                <Text style={[styles.titulo, styles.valor]}>{`R$ ${valor}`}</Text>
            </View>
        </View>
    );
}

export default Card;