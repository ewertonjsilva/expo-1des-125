import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            backgroundColor: '#fafafa', 
            alignItems: 'center',             
        }, 
        titulo: {
            fontSize: RFPercentage(5), 
            fontWeight: 'bold', 
            color: 'darkslategrey', 
            margin: RFPercentage(5),
        }, 
        txt: {
            fontSize: RFPercentage(2.5), 
            marginBottom: RFPercentage(5), 
            color: 'darkslategrey', 
            fontWeight: 'bold',
        }, 
        label: {
            fontSize: RFPercentage(2), 
            width: '80%',
            textAlign: 'left', 
            color: 'darkslategrey', 
        },  
        input: {
            borderWidth: RFPercentage(0.5), 
            borderColor: 'darkslategrey', 
            width: '80%', 
            borderRadius: RFPercentage(1.5), 
            padding: RFPercentage(1.5), 
            fontSize: RFPercentage(2), 
            textAlign: 'center', 
            marginBottom: RFPercentage(2),
        }, 
        botao: {
            backgroundColor: 'darkslategrey', 
            width: '75%',   
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
    }
);  

export default styles;