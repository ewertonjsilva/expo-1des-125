import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkslategrey',
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
        flexDirection: 'row',
    },
    titulo: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: 'darkslategrey',
    },
    mensagem: {
        fontSize: RFPercentage(1.5),
        color: '#222',
    },
    imagem: {
        height: RFPercentage(10),
        width: RFPercentage(10),
        // width: '20%',
        resizeMode: 'contain',
        // borderWidth: 1, 
        // borderColor: '#f00',
    },
    containerImagem: {
        width: '30%',
    },
    containerDados: {
        width: '70%',
        // borderWidth: 1,
        // borderColor: '#0f0'
    },
});

export default styles;