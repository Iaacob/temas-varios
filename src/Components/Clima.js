import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import SvgButton from "./SvgButton.js";
import { UbicacionContext } from '../Context/UbicacionContext.js';

export default function Clima() {
  const {location} = useContext(UbicacionContext);
  const [clima, setClima] = useState(
    {
      base: "none",
      clouds: {all: 0},
      cod: 0,
      coord: {lon: 0, lat: 0},
      dt: 0,
      id: 0,
      main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0
      },
      name: "Everywhere at the end of time",
      sys: {sunrise: 0, sunset: 0},
      timezone: 0,
      visibility: 0,
      weather: [],
      wind: {speed: 0, deg: 0, gust: 0}
    }
  );

  const getClima = async () => {
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
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Lugar</Text>
          <Text style={styles.cell}>{clima.name}</Text>
        </View>
        <View style={styles.row}>
        
          <Text style={styles.cell}>Temperatura</Text>
          <Text style={styles.cell}>{clima.main.temp}°</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Sensación térmica</Text>
          <Text style={styles.cell}>{clima.main.feels_like}°</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Temperatura máxima</Text>
          <Text style={styles.cell}>{clima.main.temp_max}°</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Temperatura mínima</Text>
          <Text style={styles.cell}>{clima.main.temp_min}°</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Humedad</Text>
          <Text style={styles.cell}>{clima.main.humidity}%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Viento</Text>
          <Text style={styles.cell}>{clima.wind.deg}° a {clima.wind.speed}km/h</Text>
        </View>
      </View>
      <View style={styles.centerButton}>
        <SvgButton style={styles.mapButton} viewBox="-2 -2 20 20" onClick={getClima}>
          M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z
        </SvgButton>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  table: {
  },
  row: {
    flexDirection: "row"
  },
  cell: {
    border: "solid 0.5px",
    width: "50%",
    padding: "3px"
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