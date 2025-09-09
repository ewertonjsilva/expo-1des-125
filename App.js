import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02'; 
import Exemplo03 from './src/exemplos/ex03';

import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02'; 
import Atividade03 from './src/atividades/atv03';

import Revisao02 from './src/revisao/rev02';
import Revisao03 from './src/revisao/rev03';

export default function App() {
  return (
    <View style={styles.container}>
      <Revisao03 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    padding: RFPercentage(1.2), 
    paddingTop: Constants.statusBarHeight, 
  },
});

