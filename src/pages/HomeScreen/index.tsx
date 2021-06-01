import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HeaderInfo from '../../components/HeaderInfo';
import Lottie from 'lottie-react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen: React.FC = () => {

  return (
    <ScrollView style={styles.container}>
      <HeaderInfo />
      <Lottie
        source={require('../../assets/animations/dog-caramelo.json')}
        autoPlay
        loop
        speed={1.2}
        style={{ height: 200, width: 200 }}
      />
      <Lottie
        source={require('../../assets/animations/dog-caramelo.json')}
        autoPlay
        loop
        speed={1.2}
        style={{ height: 200, width: 200 }}
      />
      <Lottie
        source={require('../../assets/animations/dog-caramelo.json')}
        autoPlay
        loop
        speed={1.2}
        style={{ height: 200, width: 200 }}
      />
      <Lottie
        source={require('../../assets/animations/dog-caramelo.json')}
        autoPlay
        loop
        speed={1.2}
        style={{ height: 200, width: 200 }}
      />
      <Lottie
        source={require('../../assets/animations/dog-caramelo.json')}
        autoPlay
        loop
        speed={1.2}
        style={{ height: 200, width: 200 }}
      />
    </ScrollView>
  );
};

export default HomeScreen;