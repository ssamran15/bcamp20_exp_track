import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// create and initialize the initial states

const initialState = {
    transactions: []
}

// export the initial states
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    //console.log(children);
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // Delete Existing Transaction Action
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value= {
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>{children}</GlobalContext.Provider>
    );
}