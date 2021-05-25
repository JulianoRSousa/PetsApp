import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import HeaderInfo from '../../components/HeaderInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen: React.FC = () => {

  return (
    <ScrollView style={styles.container}>
      <HeaderInfo/>
      
    </ScrollView>
  );
};

export default HomeScreen;