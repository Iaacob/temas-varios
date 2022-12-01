import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';
import SvgButton from "./SvgButton.js";
import { UbicacionContext } from '../Context/UbicacionContext.js';

export default function Ubicacion() {
  const {location, chLocation, getLocation} = useContext(UbicacionContext);

  return (
    <View>
      <View style={styles.oneLine}>
        <Text>Latitude: </Text>
        <TextInput value={location.latitude} onChangeText={(v) => chLocation("latitude",v)}/>
      </View>
      <View style={styles.oneLine}>
        <Text>Longitude: </Text>
        <TextInput value={location.longitude} onChangeText={(v) => chLocation("longitude",v)}/>
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
