import React, { useState } from "react";
import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useAuth } from "../../contexts/auth";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import * as AppColors from '../../assets/Colors';
import PetsButton from "../../components/PetsMainButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInputMask } from 'react-native-masked-text';
import { PetsInputTextViewMinor } from "./styles";
import signUp from "../../controllers/userController";



const CreateAccount: React.FC = () => {

  NavigationBar.setColor('#ff8637')

  const { signIn } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState(false)

  const height = Dimensions.get('screen').height;

  async function handleSignIn() {
    await signIn(email, pass)
  }

  async function handleSubmit(email, fullname, birthdate, pass) {
    if (pass == repeatPass) {
      if (String(pass).length > 5) {
        if (!termsCheckBox) {
          Alert.alert('Termos e condições', 'Para criar uma conta é necessario aceitar os termos e condições')
        } else {
          try {
            await signUp(email, fullname, birthdate, pass)
              .then(async Res => {
                if (Res.status == 201) {
                  Alert.alert('Olá!', 'Conta criada com sucesso!', [
                    { text: "OK", onPress: () => handleSignIn() }
                  ]);
                  console.log(email, ' + ', pass)
                  return
                } else if (Res.status == 202) {
                  Alert.alert('Email invalido', 'Este email já está cadastrado!');
                }
              });
          } catch (error) {
            Alert.alert('Error', error.message);
            console.log('errinho:  ', error)
          }
        }
      } else {
        Alert.alert('Senha muito curta', 'Informe uma senha com pelo menos 6 digitos')
      }
    } else {
      Alert.alert('Senha não confere', 'Repita a senha corretamente')
    }
  }

  return (
    <View style={{ backgroundColor: '#ff8637' }}>
      <ImageBackground source={require('../../assets/images/LoginBackImage.png')}
        resizeMode="stretch"
        style={{ height: height, justifyContent: "center", alignItems: 'center' }}>
        <StatusBar backgroundColor={'#fff0'} translucent={true} />
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
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontFamily: 'SomethingRegular', color: AppColors.light, fontSize: 90, }}>pets</Text>
        </View>
        <Text style={{
          width: '73%',
          paddingBottom: 10,
          alignSelf: 'center',
          backgroundColor: '#F9A862',
          fontFamily: 'Quicksand-Regular',
          textAlign: 'center',
          fontSize: 30,
          color: AppColors.light
        }}
        >CADASTRE-SE</Text>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={{
              width: '97%',
              height: '84%',
              backgroundColor: 'white',
              fontSize: 16,
              fontFamily: "Quicksand-Light",
              color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='custom'
            placeholder={'nome completo'}
            options={{
              mask: '********************************************************************************************************************************'
            }}
            value={fullName}
            keyboardType={'default'}
            onChangeText={text => {
              setFullName(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={{
              width: '97%',
              height: '84%',
              backgroundColor: 'white',
              fontSize: 16,
              fontFamily: "Quicksand-Light",
              color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='datetime'
            placeholder={'data de nascimento'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={birthdate}
            keyboardType={'numeric'}
            onChangeText={text => {
              setBirthdate(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={{
              width: '97%',
              height: '84%',
              backgroundColor: 'white',
              fontSize: 16,
              fontFamily: "Quicksand-Light",
              color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='custom'
            placeholder={'email'}
            options={{
              mask: '*********************************************************************'
            }}
            value={email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            onChangeText={text => {
              setEmail(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={{
              width: '97%',
              height: '84%',
              backgroundColor: 'white',
              fontSize: 16,
              fontFamily: "Quicksand-Light",
              fontWeight: '100',
              color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='custom'
            placeholder={'senha'}
            options={{
              mask: '************************************************',
            }}
            keyboardType={'default'}
            secureTextEntry={true}
            value={pass}
            onChangeText={text => {
              setPass(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={{
              width: '97%',
              height: '84%',
              backgroundColor: 'white',
              fontSize: 16,
              fontFamily: "Quicksand-Light",
              fontWeight: '200',
              color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='custom'
            placeholder={'repita a senha'}
            options={{
              mask: '************************************************',
            }}
            keyboardType={'default'}
            secureTextEntry={true}
            value={repeatPass}
            onChangeText={text => {
              setRepeatPass(text)
            }}
          />
        </PetsInputTextViewMinor>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <BouncyCheckbox
            size={18}
            fillColor="#0eeb50ac"
            unfillColor="#fff"
            iconStyle={{ borderColor: AppColors.baseLight }}
            textStyle={{ fontFamily: "SomethingRegular" }}
            onPress={() => setTermsCheckBox(!termsCheckBox)}
            useNativeDriver={true}
          /><Text style={{ fontSize: 9, color: AppColors.light }}>li e aceito os termos e condições disponíveis neste link</Text>
        </View>
        <PetsButton marginTop={7} tittle={'criar conta'} onPress={() => handleSubmit(email, fullName, birthdate, pass)} />
        <Text style={{ marginVertical: 7, color: AppColors.light }}>ou</Text>
        <View style={{ marginBottom: 8, elevation: 10, backgroundColor: '#D5702E', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Text style={{ color: AppColors.light }}>Criar conta com </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <IconMaterial name='google' color={'#FF4B26'} size={35} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 5 }}>
            <IconIonicons name='logo-facebook' color={'#475993'} size={35} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CreateAccount;