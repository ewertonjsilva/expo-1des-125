import { Text, View, TouchableOpacity } from 'react-native';

import styles from './stylesDrwPers';

function DrawerPersonalizado (props) {
    return (
        <View style={styles.viewDrawer}>
            <View style={styles.vTitulo}>
                <Text style={styles.txtDrawer}>Drawer Personalizado</Text>
            </View>

            <View style={styles.vItens}>

                <TouchableOpacity style={styles.botao} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.txtDrawer}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => props.navigation.navigate('Sobre')}>
                    <Text style={styles.txtDrawer}>Sobre</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default DrawerPersonalizado;