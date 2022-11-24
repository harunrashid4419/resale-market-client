import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UsersContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    };

    const updateUser = userInfo =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect(() =>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, [])

    const authInfo = {createUser, logIn, user, logOut, updateUser, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UsersContext;