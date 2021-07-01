import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useAuth } from '../contexts/auth';
import { useModal } from '../contexts/modal';
import PetsModal from './PetsModal';
import * as AppFonts from '../assets/strings/Fonts';


const rem = (Dimensions.get("window").width) / 380;


function PetsDrawerContent({navigation}) {

  const modal = useModal();
  const { signOut } = useAuth();
  function oi1(){
    signOut()
  }
  function oi2() {
    console.log(typeof(signOut))
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#1E2D3E' }}>
      <PetsModal />
      <View style={{ backgroundColor: '#263445', height: '22.4%' }}>

      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('CheckList')}}
        style={{
          backgroundColor: '#264445',
          height: '10%',
          width: '100%',
          marginVertical: 10 * rem,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: '#595959',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <EvilIcons name={'chevron-left'} size={30} color={'#a6a6a6'} />
        <Text
          style={{
            color: '#c6c6c6',
            fontFamily: AppFonts.mainFontLight,
            marginHorizontal: 15 * rem
          }}
        >Tarefas a fazer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 40, backgroundColor: '#fff', height: '10%', width: '80%', alignSelf: 'center' }}
        onPress={() => {
          modal.ShowModal(
            'TwoButtons',
            'LogOut',
            'Tem certeza que deseja desconectar?',
            'Sim',
            signOut,
            'Não',
            oi2)
        }}
      >
        <Text style={{ color: '#f55', fontSize: 12 * rem }}> Desconectar </Text>
      </TouchableOpacity>
    </View>
  );
}

export default PetsDrawerContent;