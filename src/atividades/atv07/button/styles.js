import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        height: (Dimensions.get('window').height / 6) - 10,
        width: (Dimensions.get('window').width / 4) - 5.5,
        padding: RFValue(10),
        backgroundColor: '#f0f0f0',
        borderWidth: RFValue(1),
        borderColor: '#888',
        justifyContent: 'center',
    },
    txtButton: {
        fontSize: RFPercentage(5),
        textAlign: 'center',
    },
    operationButton: {
        backgroundColor: '#FA8231',
    },
    operationTxtButton: {
        color: '#FFF',
    },
    buttonDouble: {
        width: ((Dimensions.get('window').width / 4) - 5.5) * 2,
    },
    buttonTriple: {
        width: ((Dimensions.get('window').width / 4) - 5.6) * 3,
    },
});
export default styles;