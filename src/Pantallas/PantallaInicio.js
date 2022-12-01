import { React, useContext } from 'react';
import { View, Text } from 'react-native';

import { EmergenciaContext } from "../Context/EmergenciaContext.js";
import { PantallaContext } from "../Context/PantallaContext.js";

import TextButton from '../Components/TextButton.js';
import Ubicacion from "../Components/Ubicacion.js";

export default function PantallaInicio() {
    const {emergencia} = useContext(EmergenciaContext);
    const {setPantalla} = useContext(PantallaContext);
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Número de emergencia: </Text>
                <Text style={styles.input}>{emergencia}</Text>
                <TextButton style={styles.button} onClick={() => setPantalla("emergencia")}>Cambiar</TextButton>
            </View>
            <View style={styles.container}>
                <TextButton style={styles.button} onClick={() => setPantalla("contactos")}>Ver contactos</TextButton>
            </View>
            <View style={styles.container}>
                <Ubicacion/>
            </View>
        </>
    );
}
const styles = {
    container: {
        flexDirection: "row",
        margin: "1%"
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