import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'darkslategrey',
            alignItems: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            color: '#777',
            letterSpacing: 10,
            marginBottom: RFPercentage(5),
        },
        txt: {
            fontSize: RFPercentage(3.5), 
            color: '#ff0', 
            textAlign: 'center',
        }, 
        txtAula: {
            fontSize: RFPercentage(3.5), 
            color: '#00f', 
        }, 
        txtNormal: {
            color: '#eee',
        }
    }
);

export default styles;