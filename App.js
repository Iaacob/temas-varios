import { useContext } from "react";
import { View } from "react-native";

import { EmergenciaProvider } from "./src/Context/EmergenciaContext";
import { PantallaContext, PantallaProvider } from "./src/Context/PantallaContext.js";

import PantallaInicio from './src/Pantallas/PantallaInicio.js';
import PantallaEmergencia from './src/Pantallas/PantallaEmergencia.js';
import PantallaContactos from './src/Pantallas/PantallaContactos.js';
import PantallaQR from "./src/Pantallas/PantallaQR.js";
import { UbicacionProvider } from "./src/Context/UbicacionContext";

export default function App() {
  return (
    <PantallaProvider>
      <UbicacionProvider>
        <EmergenciaProvider>
          <View style={styles.container}>
            <PantallaCorrespondiente/>
          </View>
        </EmergenciaProvider>
      </UbicacionProvider>
    </PantallaProvider>
  );
}

function PantallaCorrespondiente(){
  const {pantalla, setPantalla} = useContext(PantallaContext);
  switch(pantalla){
    case "inicio":
      return (<PantallaInicio/>);
    case "emergencia":
      return (<PantallaEmergencia/>);
    case "contactos":
      return (<PantallaContactos/>);
    case "qr": 
      return (<PantallaQR/>);
    default:
      setPantalla("inicio");
      return (<PantallaInicio/>);
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};
