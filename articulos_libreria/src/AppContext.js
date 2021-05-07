import React, {useState, createContext, useReducer, useContext} from 'react';

export const AppContext = createContext();

export const Provider = (props) => {
    const [cart, setCart] = useState([]);
  
  return (
    <AppContext.Provider value={[cart, setCart]}>
        {props.children}
    </AppContext.Provider>
  ) 
}