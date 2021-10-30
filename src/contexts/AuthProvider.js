import React, { createContext } from 'react';
import usefirebase from '../Hooks/usefirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = usefirebase()


    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;