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
    button: {
        backgroundColor: 'deepskyblue',
        height: RFValue(56),
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
        width: '100%',
    },
    buttonTouch: {
        backgroundColor: '#fff',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#fafafa',
        textAlign: 'center',
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
});

export default styles;