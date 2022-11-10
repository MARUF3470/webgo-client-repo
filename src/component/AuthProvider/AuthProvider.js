import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goolgeLogin = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }
    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        userRegister,
        userLogin,
        updateUserProfile,
        goolgeLogin,
        logOut,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;