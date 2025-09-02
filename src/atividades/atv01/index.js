import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Atividade01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.txt}>Introdução React Native com Expo</Text>
            <Text style={styles.txtAula}>Aula do Ewerton</Text>
            <Text style={styles.txtNormal}>Bem na sexta feira</Text>
        </View>
    );
}

