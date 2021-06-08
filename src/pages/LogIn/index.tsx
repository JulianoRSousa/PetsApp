/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ImageBackground, View, Text, StatusBar } from 'react-native';
import PetsTextInput from '../../components/PetsTextInput';
import { useAuth } from "../../contexts/auth";
import PetMainButton from '../../components/PetsMainButton';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';



const SignIn: React.FC = () => {

  const { signIn } = useAuth();

  const [username_email, setUsername_email] = useState('');
  const [pass, setPass] = useState('');

  async function handleSigIn() {
    await signIn(username_email, pass)
  }


  return (
    <>
      <ImageBackground source={require('../../assets/images/LoginBackImage.png')} resizeMode="stretch" style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground source={require('../../assets/images/Paws.png')}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top:0,
            height: '50%',
            width: '100%',
            justifyContent: "center",
          }}>
        </ImageBackground>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar backgroundColor={'#fff0'} translucent={true} />
          <Text style={{ color: 'white', fontFamily: 'SomethingRegular', fontSize: 190 }}>pets</Text>

          <View style={{ alignItems: 'center', justifyContent: 'center', height: '60%' }}>
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              underlineColorAndroid='#fff'
              placeholder={'usuário/email'}
              value={username_email}
              onChangeText={setUsername_email} />
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              placeholder={'senha'}
              value={pass}
              onChangeText={setPass}
              onSubmitEditing={() => handleSigIn()} />
            <PetMainButton marginBottom={10} tittle='entrar' onPress={() => handleSigIn()} />
            <View style={{ elevation: 3, backgroundColor: '#FF8637', paddingHorizontal: 4 }}>
              <Text style={{ color: 'white', fontFamily: 'Quicksand-Bold' }}>Entrar com</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <IconMaterial name='google' color={'#FF4B26'} size={30} />
              <IconIonicons name='logo-facebook' color={'#475993'} size={30} />
            </View>
            <PetMainButton fontSize={20} width={0.352} height={0.0625} marginTop={10} tittle='criar conta' onPress={() => { }} />
          </View>
        </View>
      </ImageBackground>

    </>
  );
};

export default SignIn;