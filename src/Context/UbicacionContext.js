import {createContext, React, useState} from 'react';
import * as Location from 'expo-location';

export const UbicacionContext = createContext();

export function UbicacionProvider(props){
  const [location, setLocation] = useState({latitude: 0, longitude: 0, coords:{}});

  const getLocation = () => {
    (async () => {
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

    return (<UbicacionContext.Provider
        value={{
            location,
            chLocation,
            getLocation
        }}>
            {props.children}
        </UbicacionContext.Provider>);
}

function notNull(element){
  if(element == null || (element == undefined || element == NaN)){
    return 0;
  }else{
    return element;
  }
}