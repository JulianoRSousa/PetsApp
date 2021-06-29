import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { useAuth } from '../contexts/auth';
import { useModal } from '../contexts/modal';
import PetsModal from './PetsModal';


const rem = (Dimensions.get("window").width) / 380;


function PetsDrawerContent({ navigation }) {

  const modal = useModal();
  const { signOut } = useAuth();
   function oi2(){
     console.log('não')
   }

  return (
    <View style={{ flex: 1, backgroundColor: '#1E2D3E' }}>
      <PetsModal />
      <View style={{ backgroundColor: '#263445', height: '22.4%' }}>

      </View>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 40, backgroundColor: '#fff', height: '10%', width: '80%', alignSelf: 'center' }}
        onPress={() => {
          modal.ShowModal(
            true,
            'LogOut',
            'Tem certeza que deseja desconectar?',
            'Sim',
            'Não',
            () => signOut,
            () => oi2)
        }}
      >
        <Text style={{ color: '#f55', fontSize: 12 * rem }}> Desconectar </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PetsDrawerContent;