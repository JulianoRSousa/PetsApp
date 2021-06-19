import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { useAuth } from "../../contexts/auth";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import * as AppColors from '../../assets/Colors';
import PetsButton from "../../components/PetsMainButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInputMask } from 'react-native-masked-text';
import style, { PetsInputTextViewMinor } from "./styles";
import signUp from "../../controllers/userController";
import Geolocation from '@react-native-community/geolocation';




const CreateAccount: React.FC = () => {

  NavigationBar.setColor(AppColors.base)

  const { signIn } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [latitude, setLatitude] = useState('-11,8608');
  const [longitude, setLongitude] = useState('-55,5095');
  const [termsCheckBox, setTermsCheckBox] = useState(false)
  const [watchID, setWatchID] = useState(0);



  const rem = (Dimensions.get('window').width) / 380;

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Precisamos de sua localização para a listagem de pets proximos a você",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Não permitir",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await getLocation();
          Alert.alert('Um instante', 'Estamos Criando sua conta');
        } else {
          Alert.alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const latitude = JSON.stringify(position.coords.latitude);
      const longitude = JSON.stringify(position.coords.longitude);
      setLatitude(latitude);
      setLongitude(longitude);
    });
    setWatchID(watchID);
  }

  async function handleSignIn() {
    await signIn(email, pass)
    Geolocation.clearWatch(watchID);
  }

  async function handleSubmit(email, fullname, birthdate, pass) {
    if (pass == repeatPass) {
      if (String(pass).length > 5) {
        if (!termsCheckBox) {
          Alert.alert('Termos e condições', 'Para criar uma conta é necessario aceitar os termos e condições')
        } else {
          try {
            await callLocation()
            await signUp(email, fullname, birthdate, pass, latitude, longitude)
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
    <View style={{ backgroundColor: AppColors.base }}>
      <ImageBackground
        source={require('../../assets/images/backgroundImage.png')}
        resizeMode="stretch"
        style={style.backgroundImage}>
        <StatusBar backgroundColor={AppColors.transparent} translucent={true} />
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <Text style={style.textLogo}>pets</Text>
        </View>
        <Text style={style.textH2}
        >CADASTRE-SE</Text>
        <PetsInputTextViewMinor>
          <TextInputMask
            style={style.textInputMask}
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
            style={style.textInputMask}
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
            style={style.textInputMask}
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
            style={style.textInputMask}
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
            style={style.textInputMask}
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
            size={18 * rem}
            fillColor="#0eeb50ac"
            unfillColor="#fff"
            iconStyle={{ borderColor: AppColors.baseLight }}
            textStyle={{ fontFamily: "SomethingRegular" }}
            onPress={() => setTermsCheckBox(!termsCheckBox)}
            useNativeDriver={true}
          />
          <TouchableOpacity>
            <Text style={style.textH5}>
              li e aceito os termos e condições disponíveis neste link
            </Text>
          </TouchableOpacity>
        </View>
        <PetsButton marginTop={7 * rem}
          tittle={'criar conta'}
          fontSize={18 * rem}
          onPress={() => handleSubmit(email, fullName, birthdate, pass)} />
        <Text style={style.textH4}>ou</Text>
        <View style={{ marginBottom: 8 * rem, elevation: 10 * rem, backgroundColor: '#D5702E', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Text style={style.textH5}>Criar conta com </Text>
        </View>
        <View style={{ flexDirection: 'row', padding: 4 * rem }}>
          <TouchableOpacity style={{ padding: 2 * rem }}>
            <Image source={require('../../assets/images/Icon_google.png')}
              style={style.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconIonicons name='logo-facebook'
              color={AppColors.darkBlue}
              size={32 * rem} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CreateAccount;
