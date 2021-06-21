import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import * as AppColors from '../assets/strings/Colors';



function PetsHeader() {
  const rem = (Dimensions.get("window").width) / 380

  const navigation = useNavigation();
  return (
    <View style={{ 
      backgroundColor: AppColors.base2, 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      height: 50 * rem }}>
      <TouchableOpacity onPress={() => navigation.goBack()}
        style={{ height: '70%', marginHorizontal: 5 * rem, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/images/IconBackButton.png')} style={{
          aspectRatio: 1, resizeMode: 'stretch', height: '90%'
        }} />
      </TouchableOpacity>
      <Text style={{ color: '#fff', fontFamily: 'Chewy', fontSize: 24 * rem }}>Pets</Text>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={{ height: '70%', marginHorizontal: 5 * rem, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/images/IconMenuImage.png')} style={{
          aspectRatio: 1, resizeMode: 'stretch', height: '90%'
        }} />
      </TouchableOpacity>
    </View>
  );
}

export default PetsHeader;