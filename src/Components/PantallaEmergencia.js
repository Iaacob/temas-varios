import { React, useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextButton from './TextButton.js';
import { EmergenciaContext } from "../Context/EmergenciaContext.js";
import { PantallaContext } from "../Context/PantallaContext.js";

export default function PantallaEmergencia() {
    const {emergencia, setEmergencia} = useContext(EmergenciaContext);
    const {setPantalla} = useContext(PantallaContext);
    const [nuevo, setNuevo] = useState(emergencia);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Número de emergencia: </Text>
            <TextInput style={styles.input} dataDetectorTypes='phoneNumber' onChangeText={setNuevo} value={nuevo}/>
            <TextButton style={styles.button} color="lightgreen" onClick={() => {setEmergencia(nuevo);setPantalla("inicio");}}>Guardar</TextButton>
            <TextButton style={styles.button} color="pink" onClick={() => setPantalla("inicio")}>Cancelar</TextButton>
        </View>
    );
}
const styles = {
    container: {
        flexDirection: "row"
    },
    text: {
        margin: 3
    },
    input: {
        border: "solid 1px",
        padding: 3
    },
    button: {
        margin: 3
    }
};