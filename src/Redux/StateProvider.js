import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();
function StateProvider({ children, reducer, initialState }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}
const useStateValue = useContext(StateContext);

export { StateProvider, StateContext, useStateValue };
