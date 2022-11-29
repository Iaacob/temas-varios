import React, { useState, useEffect, useContext } from 'react';
import { AsyncStorage } from '@react-native-community/async-storage';


const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const [background, setBackground] = useState(null);

    useEffect(() =>{
        if(background){
            AsyncStorage.setItem('background', background)
            setBackground(background)
        }
    }, [background])

    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('background');
          if (value !== null) {
            // We have data!!
            setBackground(value)
            console.log(value);
          }
        } catch (error) {
          // Error retrieving data
        }
      };

      useEffect(() => {
        retrieveData();
    }, []);

    return (
        <BackgroundContext.Provider value={{background, setBackground}}>
            {children}
        </BackgroundContext.Provider>
    );

};


export default BackgroundContext;