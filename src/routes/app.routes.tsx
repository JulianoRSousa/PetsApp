import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContent } from '@react-navigation/drawer'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const DrawerHomeScreen: React.FC = () => (
  <Drawer.Navigator drawerPosition={'right'}>
    <Drawer.Screen name="HomeScreen"  component={HomeScreen} options={{  title: 'Feed' }} />
    <Drawer.Screen name="Friends" component={Friends} options={{ title: 'Amigos',  }} />
    <Drawer.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </Drawer.Navigator>
);
const DrawerFriends: React.FC = () => (
  <Drawer.Navigator>
    <Tab.Screen name="Friends" component={Friends} options={{ title: 'Amigos' }} />
  </Drawer.Navigator>
);



const TabNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={DrawerHomeScreen} options={{ title: 'Feed' }} />
    <Tab.Screen name="Friends" component={Friends} options={{ title: 'Amigos' }} />
    <Tab.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <Tab.Screen name="Profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </Tab.Navigator>
);




const AppRoutes: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={DrawerHomeScreen} options={{ title: 'Feed' }} />
    <Tab.Screen name="Friends" component={Friends} options={{ title: 'Amigos' }} />
    <Tab.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <Tab.Screen name="Profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </Tab.Navigator>
);
export default AppRoutes;