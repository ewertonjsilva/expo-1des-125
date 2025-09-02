import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#fafafa', // cor do container
        borderRadius: RFPercentage(2), // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn        
    }, 
    titulo: {
        fontFamily: 'monospace',
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: RFPercentage(0.6), // expessura da borda
        marginTop: RFPercentage(1), // margem acima do elemento
        marginBottom: RFPercentage(10), // margem abaixo do elemento
        // padding: 8, // espaço interno
        width: '100%', // largura do objeto
        height: 80, // altura do objeto 
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: 'darkslategrey', // cor do texto 
        borderColor: 'darkslategrey', // cor da borda 
        borderRadius: RFPercentage(2),
    }, 
    cabelo: {
        fontSize: RFPercentage(5), 
        lineHeight: RFPercentage(3.5), 
        color: 'darkslategrey', 
    },  
    texto: {
        fontFamily: 'monospace',
        fontSize: RFPercentage(3),  
        color: 'darkslategrey', 
        fontWeight: 'bold',
    }, 
    botao: {        
        backgroundColor: 'darkslategrey', 
        // padding: RFPercentage(1), 
        borderRadius: '50%', 
        width: RFPercentage(8), 
        height: RFPercentage(8), 
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    txtBotao: {
        fontFamily: 'monospace',
        fontSize: RFPercentage(4), 
        color: '#fafafa',
    }, 
    botaoZerar: {
        width: '60%', 
    }, 
    containerHorizontal: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        // borderWidth: 5, 
        width: '100%', 
        // marginVertical: RFPercentage(4), 
    }, 
    containerAtividade: {
        borderWidth: RFPercentage(0.6), 
        borderColor: 'darkslategrey', 
        borderRadius: RFPercentage(2), 
        width: '100%', 
        height: RFPercentage(30), 
        alignItems: 'center', 
        justifyContent: 'space-evenly',
    },
});

export default styles;