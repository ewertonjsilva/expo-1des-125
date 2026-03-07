import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    viewDrawer: {
        flex: 1,
    },
    txtDrawer: {
        margin: RFPercentage(2),
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1b5e20',
    },
    botao: {
        borderWidth: RFPercentage(0.5),
        padding: RFPercentage(0.2), 
        borderRadius: RFPercentage(1), 
        marginBottom: RFPercentage(1),
    },
    vTitulo: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00c853',
    },
    vItens: {
        flex: 4,
        // justifyContent: 'center',
        backgroundColor: '#69f0ae',
        padding: RFPercentage(2),
    },
});

export default styles;