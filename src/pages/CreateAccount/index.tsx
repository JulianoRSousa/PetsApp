import React, { useState } from "react";
import { ImageBackground, View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
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
import { PetsInputTextViewMinor, PetsTextInputMinor } from "./styles";




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
    <ScrollView style={{backgroundColor:'#ff8637'}}>
      <ImageBackground source={require('../../assets/images/LoginBackImage.png')}
        resizeMode="stretch"
        style={{ height: '100%', justifyContent: "center", alignItems:'center' }}>
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
            <PetsTextInputMinor
              placeholder={"nome completo"}
              onChangeText={setFullName} />
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
              placeholder={'data de nascimento DD/MM/YYYY'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              value={bDate}
              onChangeText={text => {
                setBDate(text)
              }}
            />
          </PetsInputTextViewMinor>

          <PetsInputTextViewMinor>
            <View style={{
              backgroundColor: AppColors.light,
              width: '97%',
              alignSelf: 'center',
              height: '84%'
            }}>
              <Picker
                dropdownIconColor={'#ff8637'}
                mode={"dropdown"}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }>
                <Picker.Item fontFamily={'Quicksand-Regular'} enabled={false} color={AppColors.darkLightfont} label="gênero" value="null" />
                <Picker.Item fontFamily={'Quicksand-Regular'} color={AppColors.darkLightfont} label="masculino" value="masculino" />
                <Picker.Item fontFamily={'Quicksand-Regular'} color={AppColors.darkLightfont} label="feminino" value="feminino" />
              </Picker>
            </View>
          </PetsInputTextViewMinor>
          <PetsInputTextViewMinor>
            <PetsTextInputMinor placeholder={"email"} onChangeText={setEmail} fontSize={20} height={0.07} marginVertical={4} />
          </PetsInputTextViewMinor>
          <PetsInputTextViewMinor>
            <PetsTextInputMinor placeholder={"senha"} onChangeText={setPass} fontSize={20} height={0.07} marginVertical={4} />
          </PetsInputTextViewMinor>
          <PetsInputTextViewMinor>
            <PetsTextInputMinor placeholder={"repetir senha"} onChangeText={setRepeatPass} fontSize={20} height={0.07} marginVertical={4} />
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
    </ScrollView>
  );
};
export default CreateAccount;