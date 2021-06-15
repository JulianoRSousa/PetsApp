import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/HomeScreen';
import Profile from '../pages/Profile';
import Adoption from '../pages/Adoption';
import Friends from '../pages/Friends';
import UserProfile from '../pages/UserProfile';
import { createStackNavigator } from '@react-navigation/stack';
import PetsHeader from '../components/PetsHeader';
import PetsDrawerContent from '../components/PetsDrawerContent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const TabRoutes: React.FC = () => (
  <Tab.Navigator>
    <Stack.Screen name="Homescreen" component={HomeScreen} options={{ title: 'Feed' }} />
    <Stack.Screen name="Friends" component={FriendsRoutes} options={{ title: 'Amigos' }} />
    <Stack.Screen name="Adoption" component={Adoption} options={{ title: 'Adoção' }} />
    <Stack.Screen name="profile" component={Profile} options={{ title: 'Meu Perfil' }} />
  </Tab.Navigator>
);

const FriendsRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Friends" component={Friends} options={{ header: () => <PetsHeader /> }} />
    <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'Buscar', headerTintColor:'#fff', headerStyle:{backgroundColor:'#ff8637'} }} />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerType='slide'
    drawerContent={(props) => <PetsDrawerContent {...props} />}
    screenOptions={{ headerStyle: { backgroundColor: '#ff8637', } }}>
    <Stack.Screen name="AppRoutes" component={TabRoutes} />
  </Drawer.Navigator>
);
export default AppRoutes;