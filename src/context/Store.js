import React, { createContext, useReducer } from "react";

import initialState from './initialState'
import { productsReducer } from './productsReducer'

// App Global Context
export const Context = createContext();
// App Global Context Provider Component
export const Store = props => {
  const [globalState, dispatch] = useReducer(productsReducer, initialState);

  return (
    <Context.Provider value={{ globalState, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
