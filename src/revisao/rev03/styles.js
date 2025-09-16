import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#fafafa', // cor do container
        borderRadius: 10, // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn
    }, 
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: 3, // expessura da borda
        marginTop: 20, // margem acima do elemento
        marginBottom: 20, // margem abaixo do elemento
        paddingVertical: 10, // espaço interno
        width: '100%', // largura do objeto
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: 'darkslategrey', // cor do texto 
        borderColor: 'darkslategrey', // cor da borda 
        borderRadius: 20, // arrendondar borda
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 
    botaoAlert: {
        width: '75%', 
        margin: RFPercentage(2),         
    }, 
    valor: {
        color: 'darkslategrey',  
        fontSize: RFPercentage(4),
    }, 
    botao: {
        backgroundColor: 'darkslategrey', 
        width: '100%', 
        borderRadius: RFPercentage(2), 
        padding: RFPercentage(1), 
        alignItems: 'center' , 
        justifyContent: 'center', 
        margin: RFPercentage(2),
    }, 
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa',
    }, 
    containerBotao: {
        borderWidth: RFPercentage(1), 
        borderBlockColor: 'darkslategrey', 
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        padding: RFPercentage(1), 
        borderRadius: RFPercentage(2),
    }, 
    botaoMenor: {
        width: '25%',
    },
});

export default styles;