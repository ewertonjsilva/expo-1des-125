import { View, Text } from 'react-native'; 

import styles from './styles';

function Mensagem({titulo, children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{children}</Text>
        </View>
    );
}

export default Mensagem;