import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

import imagem from '../../assets/react.png';

function Sobre() {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={imagem} 
                resizeMode="contain"
                imageStyle={{ opacity: 0.5 }}  
                style={styles.image}
            >
                <Text style={styles.titulo}>Sobre</Text>
                <Text style={styles.texto}>Aula de react-native com Expo</Text>
                <Text style={styles.texto}>Exemplos e atividades</Text>
            </ImageBackground>
        </View>
    );
}

export default Sobre;
