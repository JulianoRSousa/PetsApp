/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Dimensions, StatusBar} from 'react-native';
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';
import PetsTextInput from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from "../../contexts/auth";

const SignIn: React.FC = () => {
  const height = Dimensions.get("window").height * 0.38;

  const navigation = useNavigation();
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: AppColors.base, }}>
      <StatusBar backgroundColor={AppColors.base} />
      <View style={{ alignContent: 'center', justifyContent: 'center', maxHeight: height, flex: 1 }}>
        <Text style={{ color: 'white', fontSize: 38, textAlign: 'center', textAlignVertical: 'center' }}>Pets</Text>
      </View>
      <PetsTextInput title={'Nome de usuário'} secureTextEntry={false} />
      <PetsTextInput title={'Senha'} secureTextEntry={true} onSubmitEditing={() => handleSign()} />
      <PetsButton onPress={() => handleSign()} tittle={'Login'} color="blue" />
      <PetsButton onPress={() => navigation.navigate('CreateAccount')} tittle={'Criar Conta'} color="light" />
    </View>
  );
};

export default SignIn;