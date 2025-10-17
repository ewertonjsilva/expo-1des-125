import { Pressable, Text } from 'react-native';
import styles from './styles';

// Recebe apenas 'onPress' para notificar o clique.
export default function BotaoOperacao({ onPress, children, grande }) {
    return (
        <Pressable
            onPress={onPress} // Passa a função diretamente
            style={({ pressed }) => [
                styles.button,
                grande ? styles.btnGrande : {},
                pressed && styles.buttonTouch // Simplificação do style
            ]}
        >
            <Text style={styles.textButton}>{children}</Text>
        </Pressable>
    );
}