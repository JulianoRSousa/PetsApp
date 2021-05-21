/* eslint-disable prettier/prettier */
import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { View, Text, Dimensions, StatusBar, TextInput } from 'react-native';
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';
import PetsTextInput from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const height = Dimensions.get("window").height * 0.38;

  const navigation = useNavigation();
  const { signIn } = useAuth();

  function handleSign() {
    signIn(username, pass);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: AppColors.base, }}>
      <StatusBar backgroundColor={AppColors.base} />
      <View style={{ alignContent: 'center', justifyContent: 'center', maxHeight: height, flex: 1 }}>
        <Text style={{ color: 'white', fontFamily: "Chewy", fontSize: 60, textAlign: 'center', textAlignVertical: 'center' }}>Pets</Text>
      </View>
      <PetsTextInput title={'Nome de usuário'} secureTextEntry={false} value={username} onChangeText={setUsername} />
      <PetsTextInput title={'Senha'} secureTextEntry={true} value={pass} onChangeText={setPass} onSubmitEditing={() => handleSign()} />
      <PetsButton onPress={() => handleSign()} tittle={'Login'} color="blue" />
      <PetsButton onPress={() => navigation.navigate('CreateAccount')} tittle={'Criar Conta'} color="light" />
    </View>
  );
};

export default SignIn;