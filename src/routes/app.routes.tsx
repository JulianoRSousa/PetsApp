import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';
import { createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const DrawerHomeScreen: React.FC = () => (
    <Drawer.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: true, title: 'Feed' }} />
);

const DrawerFriends: React.FC = () => (
    <Drawer.Screen name="HomeScreen" component={Friends}  options={{ headerShown: true, title: 'Feed' }} />

);

const DrawerAdoption: React.FC = () => (
    <Drawer.Screen name="HomeScreen" component={Adoption}  options={{ headerShown: true, title: 'Feed' }} />
);

const DrawerProfile: React.FC = () => (
    <Drawer.Screen name="HomeScreen" component={Profile}  options={{ headerShown: true, title: 'Feed' }} />
);





const AppRoutes: React.FC = () => (
  <Tab.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true, title: 'Feed' }} />
    <Stack.Screen name="HomeScreena" component={DrawerFriends}  options={{headerShown:true, title: 'Feaaed' }} />
  </Tab.Navigator>
);
export default AppRoutes;