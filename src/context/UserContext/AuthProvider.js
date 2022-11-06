import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import app from '../../firebase/firebaseConfig'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const GoogleSignIN = () => {
    return signInWithPopup(auth,googleProvider)
  }
  const logout = () => {
    localStorage.removeItem('token')
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  const authoInfo = {
    user,
    loading,
    signUp,
    login,
    logout,
    GoogleSignIN
  }
  return (
    <AuthContext.Provider value={authoInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
