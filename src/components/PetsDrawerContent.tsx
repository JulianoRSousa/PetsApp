import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useAuth } from '../contexts/auth';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


function PetsDrawerContent({ navigation }) {

  const { signOut } = useAuth();

  return (
    <View style={{flex:1, backgroundColor:'#1E2D3E'}}>
      <View style={{backgroundColor:'#263445', height: '22.4%'}}>

      </View>
    <TouchableOpacity style={{alignItems:'center', justifyContent:'center' ,borderRadius:40, backgroundColor:'#fff', height:'10%', width:'80%', alignSelf:'center'}}
      onPress={() => {
        signOut();
      }}
    >
      <Text style={{color:'#f55', fontSize:20}}> Desconectar </Text>
    </TouchableOpacity>
    </View>
  );
}

  export default PetsDrawerContent;