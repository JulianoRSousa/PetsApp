/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { View, StyleSheet, StatusBar, TextInput } from 'react-native';
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';
import PetsTextInput from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppColors.base, }}>
      <StatusBar backgroundColor={AppColors.base} />
      <PetsTextInput title={'Nome de usuário'} secureTextEntry={false} />
      <PetsTextInput title={'Senha'} secureTextEntry={true} onSubmitEditing={() => handleSign()} />
      <PetsButton onPress={() => handleSign()} tittle={'Login'} color="blue" />
      <PetsButton onPress={() => navigation.navigate('CreateAccount')} tittle={'Criar Conta'} color="light" />
    </View>
  );
};

export default SignIn;