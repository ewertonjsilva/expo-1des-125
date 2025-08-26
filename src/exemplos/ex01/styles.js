import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            backgroundColor: '#ff0', 
            alignItems: 'center', 
            justifyContent: 'space-evenly', 
        }, 
        titulo: {
            fontSize: RFPercentage(5), 
            fontWeight: 'bold', 
            color: '#777',
        }, 
        txt: {
            fontSize: RFPercentage(2.5), 
        },
    }
);  

export default styles;