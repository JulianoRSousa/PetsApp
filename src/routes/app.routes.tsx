import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';
import { createStackNavigator} from '@react-navigation/stack';
import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const DrawerHomeScreen: React.FC = () => (
    <Drawer.Navigator drawerPosition='right'>
      <Drawer.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: true, title: 'Feed' }} />
    </Drawer.Navigator>
);

const DrawerFriends: React.FC = () => (
    <Drawer.Screen name="Friends" component={Friends}  options={{ headerShown: true, title: 'Amigos' }} />

);

const DrawerAdoption: React.FC = () => (
    <Drawer.Screen name="Adoption" component={Adoption}  options={{ headerShown: true, title: 'Adoção' }} />
);

const DrawerProfile: React.FC = () => (
    <Drawer.Screen name="Profile" component={Profile}  options={{ headerShown: true, title: 'Meu Perfil' }} />
);





const AppRoutes: React.FC = () => (
  <Tab.Navigator>
    <Stack.Screen name="HomeScreen" component={DrawerHomeScreen} options={{title: 'Feed' }} />
    <Stack.Screen name="HomeScreena" component={Friends}  options={{headerShown:true, title: 'Amigos' }} />
  </Tab.Navigator>
);
export default AppRoutes;