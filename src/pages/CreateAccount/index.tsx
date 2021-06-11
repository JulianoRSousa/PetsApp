import React, { useState } from "react";
import { ImageBackground, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { useAuth } from "../../contexts/auth";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color';
import { useNavigation } from '@react-navigation/native';
import { Picker } from "@react-native-picker/picker";
import * as AppColors from '../../assets/Colors';
import PetsButton from "../../components/PetsMainButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInputMask } from 'react-native-masked-text';
import { PetsInputTextView, PetsTextInput } from "./styles";




const CreateAccount: React.FC = () => {

  NavigationBar.setColor('#ff8637')

  const heightScreen = Dimensions.get("window").height;
  const widthScreen = Dimensions.get("window").width;
  const [fullName, setFullName] = useState('null');
  const [bDate, setBDate] = useState('null');
  const [selectedGender, setSelectedGender] = useState('null');
  const [email, setEmail] = useState('null');
  const [pass, setPass] = useState('null');
  const [repeatPass, setRepeatPass] = useState('null');
  const [termsCheckBox, setTermsCheckBox] = useState(false)


  return (
    <>
      <ImageBackground source={require('../../assets/images/LoginBackImage.png')}
        resizeMode="stretch"
        style={{ flex: 1, justifyContent: "center" }}>
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
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <PetsTextInput
            placeholder={"nome completo"}
            onChangeText={setFullName}
            fontSize={18}
            height={0.07}
            marginVertical={4} />
          <PetsTextInput placeholder={"data de nascimento"} onChangeText={setBDate}
          height={0.07} 
          arginVertical={4} />

          {/* <TextInputMask
            style={{ width: '70%', 
            backgroundColor: 'white', 
            fontSize: 18, 
            fontFamily: 'Quicksand-Regular', 
            color: AppColors.darkLightfont
            }}
            placeholderTextColor={AppColors.darkLightfont}
            type='cel-phone'
            secureTextEntry={true}
            placeholder={'Senha'}
            options={{
              format: '*'
            }}
            value={bDate}
            onChangeText={text => {
              setBDate(text)
            }}
          /> */}
          <PetsTextInput></PetsTextInput>
          <View style={{
            backgroundColor: '#D5702E',
            width: widthScreen * 0.7463,
            height: heightScreen * 0.0843,
            elevation: 8,
            alignContent: 'center',
            justifyContent: 'center',
            marginVertical: 4,
          }}>
            <View style={{
              backgroundColor: AppColors.light,
              width: '94%',
              alignSelf: 'center',
              height: '70%'
            }}>
              <Picker
                dropdownIconColor={'#ff8637'}
                mode={"dropdown"}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }>
                <Picker.Item fontFamily={'Quicksand-Regular'} enabled={false} color={'#0008'} label="gênero" value="null" />
                <Picker.Item fontFamily={'Quicksand-Regular'} color={'#0008'} label="masculino" value="masculino" />
                <Picker.Item fontFamily={'Quicksand-Regular'} color={'#0008'} label="feminino" value="feminino" />
              </Picker>
            </View>
          </View>
          <PetsTextInput placeholder={"email"} onChangeText={setEmail} fontSize={20} height={0.07} marginVertical={4} />
          <PetsTextInput placeholder={"senha"} onChangeText={setPass} fontSize={20} height={0.07} marginVertical={4} />
          <PetsTextInput placeholder={"repetir senha"} onChangeText={setRepeatPass} fontSize={20} height={0.07} marginVertical={4} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <BouncyCheckbox
              size={15}
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
        </View>
      </ImageBackground>
    </>
  );
};
export default CreateAccount;