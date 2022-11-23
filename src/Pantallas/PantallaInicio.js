import { React, useContext } from 'react';
import { View, Text } from 'react-native';
import TextButton from '../Components/TextButton.js';
import { EmergenciaContext } from "../Context/EmergenciaContext.js";
import { PantallaContext } from "../Context/PantallaContext.js";

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
        </>
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