import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import CreateAccount from '../pages/CreateAccount';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
    <AuthStack.Screen name="Criar Conta" component={CreateAccount} options={{headerShown:true}} />
  </AuthStack.Navigator>
);

export default AuthRoutes;