import { View, Text } from 'react-native';

import styles from './styles';

export default props =>
    <View style={styles.display}>
        <Text
            style={styles.displayValue}
            numberOfLines={1}
        >
            {props.value}
        </Text>
    </View>