import { Text, Pressable } from 'react-native';
import styles from './styles';

export default function Button(props) {

    const stylesButton = [styles.button];
    const stylesTxtButton = [styles.txtButton];

    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) {
        stylesButton.push(styles.operationButton);
        stylesTxtButton.push(styles.operationTxtButton);
    }

    return (
        <Pressable style={stylesButton} onPress={() => props.onClick(props.label)}>
            <Text style={stylesTxtButton}>{props.label}</Text>
        </Pressable>
    );
}