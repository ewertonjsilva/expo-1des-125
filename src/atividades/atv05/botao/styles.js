import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'deepskyblue',
        height: RFValue(56),
        justifyContent: 'center',
        borderRadius: RFValue(10),        
        width: '20%',
    },
    buttonTouch: {
        backgroundColor: '#fff',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#fafafa',
        textAlign: 'center',
    },
    btnGrande: {
        width: '100%',
    },
});

export default styles;