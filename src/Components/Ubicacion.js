import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Vibration, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { TextInput } from 'react-native-web';
import SvgButton from "./SvgButton.js";

export default function Ubicacion() {
  const [location, setLocation] = useState({latitude: 0, longitude: 0, coords:{}});
  const [clima, setClima] = useState({});

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let {coords} = await Location.getCurrentPositionAsync();

      setLocation({
        latitude: notNull(coords.latitude),
        longitude: notNull(coords.longitude),
        coords: coords
      });

    })();
  };

  const chLocation = (r, v) => {
    let newObj = structuredClone(location);
    newObj[r] = v;
    setLocation(newObj);
  }

  const traerClima = async () => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=4a5e740c6f08a4f54f1c87f1fe6b7bd3&units=metric`)
        if(response.data){ 
          setClima(response.data);
        }
    }
    catch(error){
      setClima({error: error});
    }
  };

  return (
    <View>
      <View style={styles.oneLine}>
        <Text>Latitude: </Text>
        <TextInput value={location.latitude} onChange={(v) => chLocation("latitude",v)}/>
      </View>
      <View style={styles.oneLine}>
        <Text>Longitude: </Text>
        <TextInput value={location.longitude} onChange={(v) => chLocation("longitude",v)}/>
      </View>
      <View style={styles.centerButton}>
        <SvgButton style={styles.mapButton} viewBox="-2 -2 20 20" onClick={getLocation}>
          M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z
        </SvgButton>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  oneLine: {
    flexDirection: "row"
  },
  centerButton: {
    alignItems: "center"
  },
  mapButton: {
    width: "20%",
    aspectRatio: 1
  }
});

function notNull(element){
  if(element == null || (element == undefined || element == NaN)){
    return 0;
  }else{
    return element;
  }
}