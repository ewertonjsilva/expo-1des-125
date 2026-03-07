import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerPersonalizado from './drawerPersonalizado';

import BottomTabs from './bottomTabs';
import Sobre from '../sobre';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
        initialRouteName='Home' 
        drawerContent={DrawerPersonalizado}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;