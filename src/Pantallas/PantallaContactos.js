import { React, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import SvgButton from '../Components/SvgButton.js';
import { EmergenciaContext } from "../Context/EmergenciaContext.js";
import { PantallaContext } from "../Context/PantallaContext.js";

export default function PantallaContactos() {
    let data = [];
    try {
        Contacts.getAll().then(contacts => {
            data = contacts;
        });
    } catch (e){
        console.warn(e);
        data = [
            {
                prefix: "La",
                givenName: "policía",
                familyName: "",
                phoneNumbers: [
                    {
                        "label": "Estatal",
                        "number": "911"
                    }
                ]
            },
            {
                prefix: "Señor",
                givenName: "Roverto",
                familyName: "Arlt",
                phoneNumbers: [
                    {
                        "label": "Mobile",
                        "number": "+54 9 11 4323-3677"
                    }
                ]
            },
            {
                prefix: "Profesora",
                givenName: "María",
                familyName: "del Valle",
                phoneNumbers: [
                    {
                        "label": "Mobile",
                        "number": "+54 9 11 5732-9976"
                    },
                    {
                        "label": "Mobile",
                        "number": "+54 9 11 6933-4207"
                    },
                    {
                        "label": "Fijo",
                        "number": "+54 2022-5612"
                    }
                ]
            }
        ];
    }
      const renderItem = ({ item }) => (
        <View style={styles.contacto}>
            <Text>{item.prefix} {item.givenName} {item.familyName}</Text>
            <br></br>
            {
                item.phoneNumbers.map( (phone) => 
                    <Text style={emergencia == phone.number ? styles.emergencia : {}}>{phone.label} {phone.number}</Text>
                )
            }
        </View>
      );
    const {emergencia} = useContext(EmergenciaContext);
    const {setPantalla} = useContext(PantallaContext);
    return (
        <>
            <SvgButton style={styles.button} color="#E6D72A" viewBox="-1 -1 18 18" onClick={() => setPantalla("inicio")}>
                M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z
            </SvgButton>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
}
const styles = {
    container: {
        flexDirection: "row"
    },
    contacto: {
        backgroundColor: "lightblue",
        padding: "8px",
        margin: "4px",
        border: "solid 1px"
    },
    emergencia: {
        color: "red",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    input: {
        border: "solid 1px",
        padding: 3
    },
    button: {
        width: "2.5%",
        aspectRatio: 1,
        margin: 3
    }
};