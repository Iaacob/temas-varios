import { useContext } from "react";
import { View } from "react-native";

import { EmergenciaProvider } from "./src/Context/EmergenciaContext";
import { PantallaContext, PantallaProvider } from "./src/Context/PantallaContext.js";

import PantallaInicio from './src/Components/PantallaInicio.js';
import PantallaEmergencia from './src/Components/PantallaEmergencia.js';

export default function App() {
  return (
    <PantallaProvider>
      <EmergenciaProvider>
        <View style={styles.container}>
          <PantallaCorrespondiente/>
        </View>
      </EmergenciaProvider>
    </PantallaProvider>
  );
}

function PantallaCorrespondiente(){
  const {pantalla} = useContext(PantallaContext);
  switch(pantalla){
    case "inicio":
      return (<PantallaInicio/>);
    case "emergencia":
      return (<PantallaEmergencia/>);
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
