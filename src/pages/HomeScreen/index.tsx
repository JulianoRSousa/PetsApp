import React from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from '@react-navigation/native';
import HeaderInfo from '../../components/HeaderInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <ScrollView style={styles.container}>
      <HeaderInfo/>
      <HeaderInfo/>
      <HeaderInfo/>
    </ScrollView>
  );
};

export default HomeScreen;