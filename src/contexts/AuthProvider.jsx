import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {auth} from '../contact/firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext= createContext();
const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //create user using gmail

  const signUpWithGmail =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const login = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword (auth, email, password);
  }
  // logout funcation

  const logOut = ()=>{
    return signOut(auth);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser);
        setLoading(false);
    });
    return ()=>{
      return unsubscribe()
    }
  })
  
  const authInfo = {
     user,
     loading,
     createUser,
     signUpWithGmail,
     login,
     logOut
  }
  

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


{/*

  //create user
  const createUser = (email, password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password);
  }
  //create user using gmail

  const signUpWithGmail =()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  //login
  const login =(email, password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  }

  //logout funcation
  const logOut =()=>{
    return signOut(auth);
  }
  //user is available or not 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentuser =>{
        setUser(currentuser);
        setLoading(false);
      })
      return ()=>{
        return unsubscribe()
      }
    })


  const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut,
    }
*/}