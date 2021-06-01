import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';
import { createStackNavigator } from '@react-navigation/stack';
import PetsHeader from '../components/PetsHeader';
import PetsDrawerContent from '../components/PetsDrawerContent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const TabRoutes: React.FC = () => (
  <Tab.Navigator>
    <Stack.Screen name="Homescreen" component={HomeScreen} options={{title: 'Feed' }} />
    <Stack.Screen name="Friends" component={Friends} options={{ title: 'Amigos' }} />
    <Stack.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <Stack.Screen name="profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </Tab.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator drawerStyle={{ backgroundColor: 'red' }}
    drawerPosition="right"
    drawerContentOptions={{activeTintColor: 'red', inactiveTintColor: 'blue'}}
    drawerType='slide'
    drawerContent={(props) => <PetsDrawerContent {...props} />}
    screenOptions={{ headerStyle: { backgroundColor: '#ff8637', } }}>
    <Stack.Screen name="AppRoutes" component={TabRoutes}
      options={{
        header: () => <PetsHeader />,
        headerShown: true,
      }}
    />
  </Drawer.Navigator>
);
export default AppRoutes;