import {createContext, React, useState} from 'react';

export const PantallaContext = createContext();

export function PantallaProvider(props){

    const [pantalla, setPantalla] = useState("inicio");

    return (<PantallaContext.Provider
        value={{
            pantalla,
            setPantalla
        }}>
            {props.children}
        </PantallaContext.Provider>);
}