import React, { createContext } from 'react';
import useData from '../Hooks/useData';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // call all context
    const allContext = useData();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>

    );
};


export default AuthProvider;