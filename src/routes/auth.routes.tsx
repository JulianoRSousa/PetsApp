import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as AppColors from '../assets/Colors';


import SignIn from '../pages/LogIn';
import CreateAccount from '../pages/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    <AuthStack.Screen name="CreateAccount" component={CreateAccount}
      options={{
        title: 'Criar Conta',
        headerTitleAlign: 'center',
        headerShown: true,
        headerStyle: { backgroundColor: AppColors.greenBase },
        headerTintColor: 'white'
      }} />
  </AuthStack.Navigator>
);

export default AuthRoutes;