import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/ex01';

import Atividade01 from './src/atividades/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    padding: RFPercentage(1.2), 
    paddingTop: Constants.statusBarHeight, 
  },
});

