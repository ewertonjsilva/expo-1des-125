import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#89ffa5',
        width: '95%',
        borderRadius: RFValue(20),
    },
    txtBotao: {
        padding: RFValue(20),
        fontSize: RFValue(22),
        color: '#6dc4a4',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnPress: {
        borderWidth: RFValue(4),
        borderColor: '#6dc4a4',
    },
});

export default styles;