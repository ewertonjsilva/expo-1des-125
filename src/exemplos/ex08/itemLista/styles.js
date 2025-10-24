import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: RFValue(10),
        paddingBottom: RFValue(2),
        borderBottomWidth: RFValue(3),
        borderColor: 'deepskyblue',
        width: '100%',
    },
    txtItem: {
        fontSize: RFValue(16),
    }
});

export default styles;