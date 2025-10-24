import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
        padding: RFValue(12),
        alignItems: 'center',
        borderRadius: RFValue(20),
        justifyContent: 'space-between',
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        color: '#aaa',
    },
    ladoalado: {
        flexDirection: 'row',
        marginVertical: RFValue(30),
    },
    imc: {
        color: 'lightgray',
        fontSize: RFValue(56),
        marginVertical: RFValue(15),
        textAlign: 'center',
    },
    txtMensagem: {
        fontSize: RFValue(37),
    }
});

export default styles;