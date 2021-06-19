/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import PetsTextInput from '../../components/PetsTextInput';
import { useAuth } from "../../contexts/auth";
import PetMainButton from '../../components/PetsMainButton';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import { useNavigation } from '@react-navigation/native';
import * as AppColors from '../../assets/Colors';
import style from '../LogIn/styles';



const SignIn: React.FC = () => {

  const rem = (Dimensions.get('window').width) / 380;

  NavigationBar.setColor(AppColors.base)

  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');



  async function handleSignIn() {
    navigation.reset;
    await signIn(email, pass)
  }


  return (
    <>
      <ImageBackground source={require('../../assets/images/backgroundImage.png')}
        resizeMode="stretch"
        style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar backgroundColor={AppColors.transparent}
            translucent={true} />
          <Text allowFontScaling={true}
            style={style.textLogo}>pets</Text>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '60%'
            }}>
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              keyboardType={'email-address'}
              placeholder={' email'}
              fontSize={24 * rem}
              value={email}
              onChangeText={setEmail} />
            <PetsTextInput
              marginVertical={10}
              autoCompleteType='off'
              autoCapitalize='none'
              placeholder={' senha'}
              fontWeight={'200'}
              secureTextEntry={true}
              fontSize={24 * rem}
              value={pass}
              onChangeText={setPass}
              onSubmitEditing={() => handleSignIn()} />
            <PetMainButton
              marginBottom={10 * rem}
              fontSize={18 * rem}
              tittle='entrar'
              onPress={() => handleSignIn()} />
            <View
              style={{
                elevation: 3 * rem,
                backgroundColor: AppColors.baseMedium,
                paddingHorizontal: 4 * rem
              }}>
              <Text style={{
                color: AppColors.lightText,
                fontFamily: 'Quicksand-Bold',
                fontSize: 12 * rem
              }}>Entrar com</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 4 * rem }}>
              <TouchableOpacity style={{ padding: 2 * rem }}>
                <Image source={require('../../assets/images/Icon_google.png')} style={style.iconImage} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconIonicons name='logo-facebook' color={AppColors.blueMedium} size={30 * rem} />
              </TouchableOpacity>
            </View>
            <PetMainButton
              padding={8 * rem}
              marginTop={20 * rem}
              fontSize={16 * rem}
              tittle='criar conta'
              onPress={() => navigation.navigate("CreateAccount")} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default SignIn;