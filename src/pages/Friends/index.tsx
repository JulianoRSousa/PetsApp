import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from '@react-navigation/native';


const Friends: React.FC = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={() => handleSignOut()} />
    </View>
  );
};

export default Friends;