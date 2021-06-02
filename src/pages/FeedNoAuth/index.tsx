import React from "react";
import { View, Text, StyleSheet } from "react-native";



const FeedNoAuth: React.FC = () => {

  return (
    <View>
      <Text>
        Tela de Feed  - Antes do usuário logar
      </Text>
    </View>
  );
};

export default FeedNoAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ff8637'
  },
});