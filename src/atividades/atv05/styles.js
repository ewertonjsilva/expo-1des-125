import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#1E90FF',
        // height: 50, 
        color: 'deepskyblue',
        borderRadius: RFValue(10),
        //   marginTop: RFValue(10), 
        padding: RFValue(10)
    },
    txtEntradaUsando: {
        borderColor: 'deepskyblue',
        outline: 'none',
    },
    textLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    txtTotal: {
        color: '#1E90FF',
        fontWeight: 'bold',
    }, 
    containerBotoes: {
        flexDirection: 'row', 
        justifyContent: 'space-between',                 
        width: '100%', 
        marginTop: RFValue(20),
        marginVertical: RFValue(20),
    }
});

export default styles;