import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import StackExemplos from './stackExemplos';
import StackAtividades from './stackAtividades';

function BottomTabs() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: { backgroundColor: '#ff0' },
                    // headerShown: false,   
                    // tabBarActiveTintColor: 'green',
                    // tabBarInactiveTintColor: 'orange', 
                    // tabBarShowLabel: false, 
                    // tabBarLabelStyle: { display: 'none' }                 
                    // tabBarLabelPosition: 'below-icon'
                }
            }
        // initialRouteName="Home"
        >
            <Tab.Screen
                name="StackExemplos"
                component={StackExemplos}
                options={{
                    title: 'Exemplos',
                    // tabBarLabelStyle: {
                    //     fontSize: 16,
                    //     fontFamily: 'Georgia',
                    //     fontWeight: 300,
                    // },                    
                    tabBarIcon: ({ focused }) => {
                        // You can return any component that you like here!
                        const color = focused ? 'tomato' : 'gray';
                        return <MaterialCommunityIcons name="notebook-outline" size={24} color={color} />;
                    },

                }}


            />
            <Tab.Screen
                name="StackAtividades"
                component={StackAtividades}
                options={
                    {
                        tabBarIcon: ({ focused }) => {
                            // You can return any component that you like here!
                            const color = focused ? 'tomato' : 'gray';
                            return <MaterialCommunityIcons name="notebook-edit-outline" size={24} color={color} />;
                        },
                    }
                }
            />
        </Tab.Navigator >
    );
}

export default BottomTabs;