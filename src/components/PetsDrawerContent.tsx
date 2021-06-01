import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


function PetsDrawerContent({ navigation }) {
  return (
    <View style={{flex:1, backgroundColor:'#1E2D3E'}}>
      <View style={{backgroundColor:'#263445', height: '22.4%'}}>

      </View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SomeScreen');
      }}
    />
    </View>
  );
}

  export default PetsDrawerContent;