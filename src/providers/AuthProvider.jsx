import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('on auth state changed', currentUser);
            setUser(currentUser);
            // get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('bistro-access-token', data.data.token)
                    })
            } else {
                localStorage.removeItem('bistro-access-token')
            }

            setLoading(false);
            return () => {
                return unsubscribe()
            }


        })
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;