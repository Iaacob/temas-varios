import {createContext, React, useState} from 'react';

export const EmergenciaContext = createContext();

export function EmergenciaProvider(props){

    const [emergencia, setEmergencia] = useState("911");

    return (<EmergenciaContext.Provider
        value={{
            emergencia,
            setEmergencia
        }}>
            {props.children}
        </EmergenciaContext.Provider>);
}