import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Clima(){
    console.log(RNLocation);
    console.log('antes');
    let ubicacion = {error: true};
    await RNLocation.configure({
        distanceFilter: 5.0
      })
      console.log('paso');
      RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse"
        }
      }).then(granted => {
          if (granted) {
            this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                ubicacion = locations;
              /* Example location returned
              {
                speed: -1,
                longitude: -0.1337,
                latitude: 51.50998,
                accuracy: 5,
                heading: -1,
                altitude: 0,
                altitudeAccuracy: -1
                floor: 0
                timestamp: 1446007304457.029,
                fromMockProvider: false
              }
              */
            })
          }
        })
    return (
        <Text>
            {
                ubicacion.error
                ?
                "No se pudo encontrar la ubicación"
                :
                "Altitud: "+ubicacion.altitude+"\nLatitud:"+ubicacion.latitude
            }
        </Text>
    );
}