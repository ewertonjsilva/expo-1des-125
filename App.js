import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';
import Exemplo03 from './src/exemplos/ex03';
import Exemplo04 from './src/exemplos/ex04';
import Exemplo05 from './src/exemplos/ex05';
import Exemplo06 from './src/exemplos/ex06';
import Exemplo07 from './src/exemplos/ex07';
import Exemplo08 from './src/exemplos/ex08';
import Exemplo09 from './src/exemplos/ex09';

import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';
import Atividade03 from './src/atividades/atv03';
import Atividade04 from './src/atividades/atv04';
import Atividade05 from './src/atividades/atv05';
import Atividade06 from './src/atividades/atv06';
import Atividade07 from './src/atividades/atv07';

// import Revisao01 from './src/revisao/rev01';

import Revisao02 from './src/revisao/rev02';
import Revisao03 from './src/revisao/rev03';
import Revisao09 from './src/revisao/rev09';
import Navegacao from './src/revisao/navegacao';

// navegação
import ListaExemplos from './src/exemplos/listaExemplos';
import StackExemplos from './src/navegacao/stackExemplos';
import StackAtividades from './src/navegacao/stackAtividades'; 
import BottomTabs from './src/navegacao/bottomTabs';
import MyDrawer from './src/navegacao/drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
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

