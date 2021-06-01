import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import HeaderInfo from '../../components/HeaderInfo';
import Lottie from 'lottie-react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen: React.FC = () => {

  return (
    <ScrollView style={styles.container}>
      <HeaderInfo/>
      <Lottie
      source={require('../../assets/animations/dog-caramelo.json')}
      autoPlay
      loop
      speed={1.2}
      style={{height:200, width:200}}
      />
      <Lottie
      source={require('../../assets/animations/dog-caramelo.json')}
      autoPlay
      loop
      speed={1.2}
      style={{height:200, width:200}}
      />
      <Lottie
      source={require('../../assets/animations/dog-caramelo.json')}
      autoPlay
      loop
      speed={1.2}
      style={{height:200, width:200}}
      />
      <Lottie
      source={require('../../assets/animations/dog-caramelo.json')}
      autoPlay
      loop
      speed={1.2}
      style={{height:200, width:200}}
      />
<<<<<<< HEAD
=======
      <Lottie
      source={require('../../assets/animations/dog-caramelo.json')}
      autoPlay
      loop
      speed={1.2}
      style={{height:200, width:200}}
      />
>>>>>>> 7cee80ff743b230215ee1130819c8074a120c7ab
    </ScrollView>
  );
};

export default HomeScreen;