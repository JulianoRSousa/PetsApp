import React, { useEffect } from "react";
import { View, StatusBar, Text, Dimensions, KeyboardAvoidingView, Platform } from "react-native";
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';
import PetsTextInput from '../../components/TextInput';

const CreateAccount: React.FC = () => {
  const height = Dimensions.get("window").height;
  const navigation = useNavigation();
  useEffect(() => {
  })

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: AppColors.greenLight }}>
      <StatusBar backgroundColor={AppColors.greenBase} />
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text style={{ color: 'white', fontSize: 38, textAlign: 'center', textAlignVertical: 'center' }}>Pets</Text>
      </View>
      <View  style={{flex: 4, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={{marginBottom:height*.1, flex:1, alignItems:'center'}}>
          <PetsTextInput title={'Nome completo'} secureTextEntry={false} />
          <PetsTextInput title={'Nome de usuário'} secureTextEntry={false} />
          <PetsTextInput title={'Senha'} autoCompleteType={'off'} secureTextEntry={true} />
          <PetsTextInput title={'Repita a senha'} secureTextEntry={true} />
          <PetsButton onPress={() => navigation.goBack()} tittle={'Criar Conta'} color="orange" />
        </View>
      </View>
    </View>
  );
};
export default CreateAccount;