import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';


const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppTab.Navigator>
    <AppTab.Screen name="HomeScreen" component={HomeScreen} options={ { tabBarLabel: 'Inicio', tabBarVisible:true }} />
    <AppTab.Screen name="Friends" component={Friends} options={{ title: 'Amigos' }} />
    <AppTab.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <AppTab.Screen name="Profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </AppTab.Navigator>
);

export default AppRoutes;