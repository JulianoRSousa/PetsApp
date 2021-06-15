import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';


function PetsHeader() {
    const navigation = useNavigation();
    return (
      <View style={{ backgroundColor: '#ff8637', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
        <TouchableOpacity></TouchableOpacity>
        <Text style={{ color: '#fff', fontFamily: 'Chewy', fontSize: 24 }}>Pets</Text>
        <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}
        style={{ backgroundColor: '#fff', height: '70%', marginHorizontal: 15, aspectRatio: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default PetsHeader;