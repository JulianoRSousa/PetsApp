import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';

import { useAuth } from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn: React.FC = (navigation) => {
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor: AppColors.base, }}>
      <StatusBar backgroundColor={AppColors.base} />
      <PetsButton onPress={() => handleSign()} tittle={'Login'} color="blue" />
      <PetsButton onPress={() => console.log('Press create acc')} tittle={'Criar Conta'} color="light" />
    </View>
  );
};

export default SignIn;