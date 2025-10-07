import { Pressable, Text } from 'react-native';

import styles from './styles';

export default function BotaoOperacao({onPress, children, mudaOperacao}) {

    function handleExecutaOperacao() {
        mudaOperacao();
        onPress(); 
    }

    return (
        <Pressable
            onPress={handleExecutaOperacao}
            style={
                ({ pressed }) => pressed ?
                    [styles.button, styles.buttonTouch]
                    :
                    styles.button
            }
        >
            <Text style={styles.textButton}>{children}</Text>
        </Pressable>
    );
}