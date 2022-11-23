import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import geolocation from '@react-native-community/geolocation';

import TextButton from '../Components/TextButton.js';

export default function Clima(){
    let ubicacion = {};
    try{
        geolocation.setRNConfiguration({skipPermissionRequests: false});
    }catch(e){}
    try{
        geolocation.requestAuthorization();
    }catch(e){}
    geolocation.getCurrentPosition(
        () => console.log(location),
        () => console.warn("No se pudo encontrar la ubicación")
      );
    return (
        <Text>{ubicacion}</Text>
    );
}