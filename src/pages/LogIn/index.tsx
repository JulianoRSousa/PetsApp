/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import PetsTextInput from '../../components/PetsTextInput';
import { useAuth } from "../../contexts/auth";
import PetMainButton from '../../components/PetsMainButton';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import { useNavigation } from '@react-navigation/native';



const SignIn: React.FC = () => {

  NavigationBar.setColor('#ff8637')
  const navigation = useNavigation();
  const { signIn, signed } = useAuth();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');



  async function handleSignIn() {
    navigation.reset;
    await signIn(email, pass)
  }


  return (
    <>
      <ImageBackground source={require('../../assets/images/LoginBackImage.png')}
        resizeMode="stretch"
        style={{ flex: 1, justifyContent: "center" }}>
        <ImageBackground source={require('../../assets/images/Paws.png')}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            height: '50%',
            width: '100%',
            justifyContent: "center",
          }}>
        </ImageBackground>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar backgroundColor={'#fff0'} translucent={true} />
          <Text allowFontScaling={true} style={{alignSelf:'center', width:'71.63%', color: 'white', fontFamily: 'SomethingRegular', textAlignVertical:'center', textAlign:'center', fontSize: 160 }}>pets</Text>

          <View style={{ alignItems: 'center', justifyContent: 'center', height: '60%' }}>
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              keyboardType={'email-address'}
              fontWeight={'200'}
              placeholder={'usuário/email'}
              value={email}
              onChangeText={setEmail} />
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              placeholder={'senha'}
              fontWeight={'200'}
              secureTextEntry={true}
              value={pass}
              onChangeText={setPass}
              onSubmitEditing={() => handleSignIn()} />
            <PetMainButton marginBottom={10} tittle='entrar' onPress={() => handleSignIn()} />
            <View style={{ elevation: 3, backgroundColor: '#E07630', paddingHorizontal: 4 }}>
              <Text style={{ color: 'white', fontFamily: 'Quicksand-Bold' }}>Entrar com</Text>
            </View>
            <View style={{ flexDirection: 'row', padding:4}}>
              <TouchableOpacity style={{padding:2}}>
                <Image source={require('../../assets/images/Icon_google.png')} style={{height:28, width:28, resizeMode:'stretch'}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <IconIonicons name='logo-facebook' color={'#475993'} size={30} />
              </TouchableOpacity>
            </View>
            <PetMainButton
              padding={8}
              marginTop={20}
              fontSize={16}
              tittle='criar conta'
              onPress={() => navigation.navigate("CreateAccount")} />
          </View>
        </View>
      </ImageBackground>

    </>
  );
};

export default SignIn;