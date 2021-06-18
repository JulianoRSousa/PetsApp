import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Alert, Platform, PermissionsAndroid } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

const Profile: React.FC = () => {
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);

  const callLocation = () => {
    if(Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar sua localização.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          Alert.alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  }
  
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
  }

  const clearLocation = () => {
    Geolocation.clearWatch(watchID);
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.boldText}>
        Você está Aqui
      </Text>
      <Text style={styles.text}>
        Latitude: {currentLatitude}
      </Text>
      <Text style={styles.text}>
        Longitude: {currentLongitude}
      </Text>
      <View style={styles.button}>
        <Button title="Obter Localização" onPress={callLocation}/>
      </View>
      <View style={styles.button}>
        <Button title="Cancelar Monitoração" onPress={clearLocation}/>
      </View>
    </View>
  );
}
export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white',
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  text: {    
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15,
  }
});