import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#1E90FF',
        color: 'deepskyblue',
        borderRadius: RFValue(10),
        padding: RFValue(10)
    },
    txtEntradaUsando: {
        borderColor: 'deepskyblue',
        outline: 'none',
    },
});

export default styles;