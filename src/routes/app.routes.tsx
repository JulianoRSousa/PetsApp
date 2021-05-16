import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';


const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppTab.Navigator>
    <AppTab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarBadge: 'oloko', tabBarLabel: 'Inicio', }} />
    <AppTab.Screen name="Amigos" component={Profile} options={{ title: 'Amigos' }} />
  </AppTab.Navigator>
);

export default AppRoutes;