import React from "react";
import { View } from "react-native";
import * as AppColors from '../../assets/Colors';
import PetsButton from '../../components/Buttons';

const CreateAccount: React.FC = (navigation) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppColors.base, }}>
      <PetsButton onPress={() => console.log('press createAcc')} tittle={'Voltar'} color="orange" />
    </View>
  );
};
export default CreateAccount;