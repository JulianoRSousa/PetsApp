import React from "react";
import { View } from "react-native";
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';
import { useNavigation } from '@react-navigation/native';

const CreateAccount: React.FC = () => {
  
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppColors.base, }}>
      <PetsButton onPress={() => navigation.goBack()} tittle={'Voltar'} color="light" />
    </View>
  );
};
export default CreateAccount;