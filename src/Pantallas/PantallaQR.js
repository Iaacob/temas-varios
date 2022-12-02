import { React, useState } from "react";
import { View, Text, TextInput } from 'react-native';
import TextButton from "../Components/TextButton.js";
import DropDownPicker from "react-native-dropdown-picker";
import QRCode from 'react-native-qrcode-svg';

export default function PantallaQR(){
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("https://github.com/Iaacob/temas-varios");
    const [logo, setLogo] = useState("ninguno");
    const [logoSize, setLogoSize] = useState("30");
    let logos = {
        ninguno: "",
        amogus: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVUExURQAAAP8AAH8AAADH/wBxwf///wAAAEJJTlMAAAAHdFJOU////////wAaSwNGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABtUlEQVRYR9WO0XKEMAwD6UHv/z+5liyCTRxCr3MzvX2BKNJOlueQJaGwY3zRoYsTo7hEl4laoMHyJXSsFBcCjQWjwlA/y9AuQEHXrwToaZT4s6A0DAQPTQBnAbVEIUDpEHBzQkUyEGhdzg01QS3YH+D1ZQ14oqoxF2xaruu3Q4e6lQDXEuC327tB5blgOwTNkJ7QCbivBYCC+IQkwBhcCBy70CQIOHWSoDLYhVZ3BL1hswutskCjs+Cs2EqB9rUAtLVRC9qoFkR+ISgNYR8FD8J9EPQGplpNBG7ICo80MvZfCwuBDB0agYlgYNAIzAS9AoFGYC4AGBrHQSvjniDzGYIrAypaGf9XMDawopXxgsAaE8GlwRtaGa8JNAJjQW3whkbgQlAZEN8X9AqGQ4HvksDQFCipBe0JZ0HPGwUcvl+Agjbg+MeFUJW0035hHy1IOKDhcOAocfZEA5Jes8Oio4S0RH2SDqQ1CZdA51cEfJmOblST3BGk6LT/QIH93hAEA/shwq+KTi/IT2AfqwPVxC1BNnhrZyLY+1wSHgO1IKKUuf4iZRZRNqQsaAuUjBk1bkzB8/kDz4UyudpDkkMAAAAASUVORK5CYII=",
    };
    let logoNames = [
        {label: "ninguno", value:"ninguno"},
        {label: "amogus", value:"amogus"}
    ];

    return (
        <View style={styles.container}>
            <Text>Texto: </Text><TextInput style={styles.input} value={text} onChangeText={setText}/>
            <Text>Logo: </Text>
            <DropDownPicker
                open={open}
                value={logo}
                items={logos}
                setOpen={setOpen}
                setValue={setLogo}
                setItems={()=>undefined}

                theme="DARK"
                multiple={true}
                mode="BADGE"
                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            />
            <Text>Tamaño de logo: </Text><TextInput style={styles.input} value={logoSize} onChangeText={setLogoSize}/>
            <Text>Texto: </Text><TextInput style={styles.input} value={text} onChangeText={setText}/>
            <Text>Texto: </Text><TextInput style={styles.input} value={text} onChangeText={setText}/>
            <Text>{"\n"}</Text>
            <QRCode
                value={text == "" || typeof text != "string" ? "https://github.com/Iaacob/temas-varios" : text}
                logo={logos[logo]}
                logoSize={logoSize > 0 ? logoSize < 75 ? logoSize : 75 : 5}
                logoBackgroundColor='transparent'
            />
            <Text>{"\n"}</Text>
            <TextButton style={styles.button} color="lightgreen" onClick={() => {setEmergencia(nuevo);setPantalla("inicio");}}>Guardar</TextButton>
            <Text>{"\n"}</Text>
            <TextButton style={styles.button} color="pink" onClick={() => setPantalla("inicio")}>Cancelar</TextButton>
        </View>
    );
}
const styles = {
    container: {
        width: "75%",
        alignItems: "center",
        margin: "1%"
    },
    text: {
        margin: 3
    },
    input: {
        border: "solid",
        width: "40%",
        padding: 3
    },
    button: {
        margin: 3
    }
};