import React, { useState, useRef, useEffect } from "react";
import { ImageBackground, View, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { useAuth } from "../../contexts/auth";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import { useNavigation } from '@react-navigation/native';
import * as AppColors from '../../assets/Colors';
import PetsButton from "../../components/PetsMainButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInputMask } from 'react-native-masked-text';
import { PetsInputTextViewMinor } from "./styles";




const CreateAccount: React.FC = () => {

  NavigationBar.setColor('#ff8637')

  const heightScreen = Dimensions.get("window").height;
  const widthScreen = Dimensions.get("window").width;
  const [fullName, setFullName] = useState('');
  const [bDate, setBDate] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState(false)

  const height = Dimensions.get('screen').height;

  const bDate_ref= useRef(null);
  const email_ref = useRef(null);
  const pass_ref = useRef(null);
  const repeatPass_ref = useRef(null);
  const terms_ref = useRef(null);

  const [ secured, setSecured ] = useState<boolean>(true)

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
          ref={bDate_ref}
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
            value={bDate}
            keyboardType={'numeric'}
            onChangeText={text => {
              setBDate(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
          ref={email_ref}
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
            onChangeText={text => {
              setEmail(text)
            }}
          />
        </PetsInputTextViewMinor>
        <PetsInputTextViewMinor>
          <TextInputMask
          ref={pass_ref}
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
            secureTextEntry={secured}
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

        <View  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
        <PetsButton marginTop={7} tittle={'criar conta'} onPress={() => { }} />
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