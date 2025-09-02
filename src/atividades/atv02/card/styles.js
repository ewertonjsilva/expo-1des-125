import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        borderWidth: RFPercentage(0.5), 
        borderColor: 'darkslategrey', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: RFPercentage(1), 
    }, 
    titulo: {
        fontSize: RFPercentage(2.5), 
        fontWeight: 'bold', 
        color: 'darkslategrey', 
    }, 
    valor: {
        color: '#000',
    }, 
    descricao: {
        fontSize: RFPercentage(1.6), 
        color: '#222', 
    },  
    containerTexto: {
        width: '65%', 
    },  
    imagem: {
        height: RFPercentage(12), 
        width: RFPercentage(12),  
        resizeMode: 'stretch',
    }, 
});

export default styles;