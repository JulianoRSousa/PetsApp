import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const AppTab = createBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <AppTab.Navigator>
    <AppTab.Screen name="Dashboard" component={Dashboard} />
    <AppTab.Screen name="Amigos" component={Profile} />
  </AppTab.Navigator>
);

export default AppRoutes;